import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>HOw to do start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Whts new payment options?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>HOw to do start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Excepturi nisi iusto architecto pariatur distinctio cupiditate tempore aperiam fugit facere labore. Itaque delectus perspiciatis vero est, excepturi autem error cum ipsum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
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