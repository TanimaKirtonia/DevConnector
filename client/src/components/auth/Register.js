import React,{Fragment, useState} from 'react'
import {Link} from 'react-router-dom';
//import axios from 'axios';
//import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = props => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:''
    });

    const { name, email, password } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = async (e) =>{
        e.preventDefault();
        register({ name, email, password });
        }
    
    if (isAuthenticated) {
            return <Redirect to="/dashboard" />;
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
    
    Register.propTypes = {
        //setAlert: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
      };
      
      const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
      });
      
      export default connect(mapStateToProps, {register})(Register);