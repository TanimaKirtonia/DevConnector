 const express = require('express');
 const router = express.Router();
 const {check, validationResult} = require('express-validator');

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
 (req, res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({ errors: errors.array()});
     }
     res.send('User route')
    });

 module.exports = router;
