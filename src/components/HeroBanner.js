import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
    return (
        <div className="hero-image-plastering">
            <form className="hero-form">
                <h>Contact Us</h>
                <div className="form-group">
                    <textarea className="form-control hero-form-field" id="exampleFormControlTextarea1" rows="1" placeholder="Name"></textarea>
                </div>
                <div className="form-group">
                    <input type="email" class="form-control hero-form-field " id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>

                <div className="form-group">
                    <textarea class="form-control hero-form-field " id="exampleFormControlTextarea1" rows="3" placeholder="Enquiry"></textarea>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    );
}

export default HeroBanner;