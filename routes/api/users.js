 const express = require('express');
 const router = express.Router();
 const gravatar = require('gravatar');
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const config = require('config');

 const {check, validationResult} = require('express-validator');
 const User = require('../../models/User');

 // @route   POST api/users
 // @desc    Register User
 // @access  Public 
 router.post('/', [
    check('name','Name is required').not().isEmpty(),
    check('email', 'Include a valid email').isEmail(),
    check('password','Enter a password with 8 or more characters').isLength({
        min:8 
    })
 ],
    async (req, res) => {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
             return res.status(400).json({ errors: errors.array() });
         }

         // req.body.fieldname to get data from postman 
         const { name, email, password } = req.body;
         try {
             //see if the user exists 
             let user = await User.findOne({ email });
             if (user) {
                 return res.status(400).json({ errors: [{ msg: 'user already exists' }] });
             }

             //get user's gravatar
             const avatar = gravatar.url(email, {
                 s: '200',
                 r: 'pg',
                 d: 'mm' //default image 
             });
             user = new User({
                 name,
                 email,
                 avatar,
                 password
             });

             // encrypt the password 
             const salt = await bcrypt.genSalt(10); //salt no idea kya 

             user.password = await bcrypt.hash(password, salt); //hashing

             await user.save(); //anything that returns a promise should have "await" in front of the statement 
            //return jsonwebtoken JWT token to authenticate and acess protected routes
             const payload = {
                 user: {
                     id: user.id
                 }
             }
             
             jwt.sign(
                 payload, 
                 config.get('jwtSecret'),
                 { expiresIn: 3600000 }, (err, token)=>{
                     if (err) throw err;
                     res.json({ token });
                 }
                 );

         }
         catch (err) {
             console.error(err.message);
             res.status(500).send('Server Error');
         }



     });

 module.exports = router;
