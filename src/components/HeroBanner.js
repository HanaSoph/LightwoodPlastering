import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
    return (
        <div className="hero-image-plastering">
            <form className="hero-form">
                <div className="header">Get in touch</div>
                <div className="form-group">
                    <input className="form-control hero-form-field" id="exampleFormControlTextarea1" rows="1" placeholder="Your name"></input>
                </div>
                <div className="form-group">
                    <input type="email" class="form-control hero-form-field " id="exampleFormControlInput1" placeholder="Your email address" />
                </div>

                <div className="form-group">
                    <textarea class="form-control hero-form-field " id="exampleFormControlTextarea1" rows="3" placeholder="Your enquiry"></textarea>
                </div>

                <button type="submit" className="btn btn-primary mb-2 hero-form-button">Submit</button>
            </form>
        </div>
    );
}

export default HeroBanner;