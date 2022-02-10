import { AnimateSharedLayout } from 'framer-motion/dist/framer-motion'
import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How to do start?">
                
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                        </div>
                        <div className="faq-line"></div>
                </Toggle>
                <Toggle title="Daily Schedule">
            
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                    </div>
                    <div className="faq-line"></div>
                
                </Toggle>
                <Toggle title="Whts new payment options?">
                
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                    </div>
                    <div className="faq-line"></div>
                    
                </Toggle>
                <Toggle title="HOw to do start?">
            
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                    </div>
                    <div className="faq-line"></div>

                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        width: 100%;
    }
    .question{
        padding: 2rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding : 2rem 0rem;
        p{
            padding:1rem 0rem;
        }
    }
`;

export default FaqSection;