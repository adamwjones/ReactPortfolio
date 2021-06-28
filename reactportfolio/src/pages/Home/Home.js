import React from "react";
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';
import Carousel from "../../components/Carousel/educationCarousel";
import Gallery from "../../components/Gallery/Gallery";
import { Container } from "../../components/Grid";
import "../Home/home.css"



const Home = () => {
    // Fade Left
    const fadeLeftAnimation = keyframes`${fadeInLeft}`;
    const SlideLeft = styled.div`animation: 1s ${fadeLeftAnimation};`;
    // Fade Right
    const fadeRightAnimation = keyframes`${fadeInRight}`;
    const SlideRight = styled.div`animation: 1s ${fadeRightAnimation};`;


    return (
        <div>
            <section className="about py-5">
                <Container fluid>
                    <div className="about-content">
                        <div className="about-image">
                            <SlideLeft className="about-description">
                                <div className="signature">
                                    <p className="m-0">Dream Big.<br />Start Small.<br /> Stay Mindful.</p>
                                </div>
                            </SlideLeft>
                            <SlideRight>
                                <img src="../assets/jombotron.png" alt="Adam in action"></img>
                            </SlideRight>
                        </div>
                    </div>
                </Container>
            </section>

            <Gallery />
            <Carousel />

        </div>
    );

};

export default Home;