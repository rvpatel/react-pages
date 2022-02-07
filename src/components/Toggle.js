import React, { useState } from "react";

const Toggle = ({children}) => { 
    const [toggle, setToggle] = useState(true);
    return (
        <div onClick={() => setToggle(!toggle)}>
            {toggle ? children : null}
        </div>
    )
}

export default Toggle;