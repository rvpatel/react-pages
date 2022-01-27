import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1 id="logo"><a href="#" title="capture">Capture</a></h1>
            <ul>
                <li>
                    <a href="#" title="capture">1. About Us</a>
                </li>
                <li>
                    <a href="#" title="capture">2. Our Work</a>
                </li>
                <li>
                    <a href="#" title="capture">3. Contact Us</a>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        text-decoration: none;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    #logo{
        font-size: 2rem;
        font-weight: lighter;
    }
`;

export default Nav;