import React from "react";
import home1 from '../img/home1.png';

//Animation
import { motion } from 'framer-motion/dist/framer-motion'
//styled
import { About, Hide, Description, Image } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>derems</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. Also have a professional amazing slills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
}

export default AboutSection;