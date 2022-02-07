import React from "react";
import home1 from '../img/home1.png';

//Animation
import { motion } from 'framer-motion/dist/framer-motion'
//styled
import { About, Hide, Description, Image } from "../styles";
import { titleAni, fade, photoAnim} from "../animation";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAni}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAni}>
                            your <span>derems</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAni}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={ fade }>Contact us for any photography or videography ideas that you have. Also have a professional amazing slills.</motion.p>
                <motion.button variants={ fade }>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={ photoAnim }src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
}

export default AboutSection;