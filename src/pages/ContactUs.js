import React from "react";
//Animation
import { motion } from 'framer-motion/dist/framer-motion'
import { pageAnimation } from "../animation";

const ContactUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show' style={{ background:"#ffffff" }}>
            <h1>Contact US</h1>
        </motion.div>
    )
}

export default ContactUs;