import React from "react";
import clock from '../img/clock.svg';
import diaphram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//styled
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>HIgh <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphram} alt="diaphram" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServicesSection;