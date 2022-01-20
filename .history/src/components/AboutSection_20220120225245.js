import React from "react";
import {home1} from '../img/home1.png'

const AboutSection = () => { 
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>derems</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have. Also have a professional amazing slills.</p>
                <button>Contact Us</button>
                <div className="image">
                    <img src="{home1}" alt="{guy with a camera}" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;