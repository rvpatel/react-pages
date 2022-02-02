import React from "react";
import home1 from '../img/home1.png';

import { motion } from 'framer-motion/dist/framer-motion'

//styled
import { About, Hide, Description, Image } from "../styles";

const AboutSection = () => {
    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    };

    const container = {
        hidden: { x: 100 },
        show: {
            x: 0, transition: {
                duration: 0.75,
                ease: "easeOut",
                staggerChildren: 1,
                when: "afterChildren"
            }
        },
    }

    return (
        <About>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>derems</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
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