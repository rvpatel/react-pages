import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSecton";

//Animation
import { motion } from 'framer-motion/dist/framer-motion'
import { pageAnimation } from "../animation";

const AboutUs = () => { 
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;