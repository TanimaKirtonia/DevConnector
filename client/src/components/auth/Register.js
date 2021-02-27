import React,{Fragment, useState} from 'react'
import {Link } from 'react-router-dom';
//import axios from 'axios';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:''
    });

    const { name, email, password } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = async e =>{
        e.preventDefault();
        console.log = 'SUCCESS';
       /* const newUser = {
           name,
           email,
           password 
        }

        try{
            const config ={
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser);
            const res = await axios.post('/api/users', body, config);
            console.log(res.data);
        }
        catch(err){
            console.error(err.response.data);
        }*/
    }
    
    return (
        <Fragment>
            <h1 className="large text-primary">
              Sign Up
          </h1>
          <p className="lead"><i className="fas fa-user"></i>
            Become a Pawfect Member
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
           <div className="form-group">
                <input type="text" placeholder="Name" name='name' value={name} onChange= {e => onChange(e)} required/>
           </div> 
           <div className="form-group">
            <input type="email" placeholder="Email Address" name='email' value={email} onChange= {e => onChange(e)} required/>
            <small className="form-text">Register using Gravatar E-mail to get your Gravatar profile picture</small>
       </div> 
       <div className="form-group">
        <input type="password" placeholder="Password" id="myInput" minLength="6" name='password' value={password} onChange= {e => onChange(e)} required/>
        </div> 
        <input type="submit" value="Register" className="btn btn-primary" />
    </form>
    <p className="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
    </p>
        </Fragment>
    );
};

export default Register;