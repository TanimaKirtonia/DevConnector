import React,{Fragment, useState} from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
          } else {
            register({ name, email, password });
          }
    };

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
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name='name' value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name='email' value={email} onChange={onChange} required />
                    <small className="form-text">Register using Gravatar E-mail to get your Gravatar profile picture</small>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" id="myInput" minLength="8" name='password' value={password} onChange={onChange} required />
                </div>
                <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
            <p className="my-1">
                Already have an account?<Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );

};
    
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
      
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});
      
export default connect
(mapStateToProps, 
    {setAlert, register})
(Register);