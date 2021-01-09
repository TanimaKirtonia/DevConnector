 const jwt = require('jsonwebtoken');
 const config = require('config');

 module.exports = function (req, res, next){
     //middleware is to access the cycle of request and response 
     // next is for callback function 

     //get the token from header 
     const token = req.header('x-auth-token');

     //check if no token
     if(!token){
         return res.status(401).json({msg: 'No token, authorisation denied'});
     }

     //verify token 
     try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
     }
     catch(err){
        res.status(401).json({msg: 'Token is not Valid'});
     }

 }