import React, { useState } from "react";
//Animation
import { motion } from 'framer-motion/dist/framer-motion'

const Toggle = ({children, title}) => { 
    const [toggle, setToggle] = useState(true);
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : null}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;