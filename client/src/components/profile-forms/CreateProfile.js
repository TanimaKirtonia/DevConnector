import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const CreateProfile = props => {
    const [formData, setFormData] = useState({
        website: '',
        location: '',
        bio:'',
        twitter:'',
        facebook:'',
        youtube:'',
        instagram:''
    });

    const {
        website,
        location,
        bio,
        twitter,
        facebook,
        youtube,
        instagram
    } = formData;
    return (
        <Fragment>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your profile stand out
            </p>
            <form className="form">
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location"/>
                    <small className="form-text">
                        City  state suggested (eg. Mumbai, Maharashtra)
                    </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Website" name="website"/>
                    <small className="form-text">
                        Could be your own or a company website
                    </small>
                </div>
                <div className="form-group">
                    <textarea name="bio"/>
                    <small className="form-text">Add a short bio of yourself</small>
                </div>
                <div className="my-2">
                    <button type="button" className="btn btn-light">
                        Add Social Network Links
                    </button>
                    <small className="form-text">Optional</small>
                 </div>

                <div className="form-group social-input">
                    <i className="fab fa-twitter fa-2x"></i>
                    <input type="text" placeholder="Twitter URL" name="twitter" />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-facebook fa-2x"></i>
                    <input type="text" placeholder="Facebook URL" name="facebook" />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-youtube fa-2x"></i>
                    <input type="text" placeholder="YouTube URL" name="youtube" />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-instagram fa-2x"></i>
                    <input type="text" placeholder="Instagram URL" name="instagram" />
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {

};

export default CreateProfile;

