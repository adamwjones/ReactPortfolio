import React from "react";
import { Container, Row } from "../../components/Grid/index";
import { SRLWrapper } from "simple-react-lightbox";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import LazyLoad from 'react-lazyload';


const Gallery = () => {
    const flipAnimation = keyframes`${fadeIn}`;
    const Flip = styled.div `animation: 1s ${flipAnimation};`;

    const options = {
        settings: {
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "white",
            iconColor: "black",
        },
        caption: {
            captionColor: "white",
            captionFontFamily: "Barlow, sans-serif",
            captionFontWeight: "300",
            captionFontSize: "25px",
        }
    };


    return (
        
        <Flip><div>
            <section className="gallery py-5">
                <Container fluid>
                    <div className="section-heading text-center">
                        <h1 className="heading-title">Experience</h1>
                    </div>
                    
                    <SRLWrapper options={options}>
                        <Row>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-1.jpg" className="img-fluid" alt="Adam as an entrepreneur standing with his team for his small business named CrossFit Press On."></img>
                                </div>
                                <p className="experience-content">Entrepreneur</p>
                            </div>

                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-2.jpg" className="img-fluid" alt="Adam as business performance improvement consultant standing in front of Wall Street's 'Charging Bull' statue."></img>
                                </div>
                                <p className="experience-content">Performance Improvement Advisor</p>
                            </div>
                            <div className="lightbox-content col-12 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-3.jpg" className="img-fluid" alt="Adam as the commanding officer of an Army company standing in front of his soldiers in formation."></img>
                                </div>
                                <p className="experience-content">Commanding Officer</p>
                            </div>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-4.jpg" className="img-fluid" alt="
                    Adam as a certified 'leader' passing US Army Ranger School - the US military's premiere leadership school."></img>
                                </div>
                                <p className="experience-content">Leader</p>
                            </div>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-5.jpg" className="img-fluid" alt="A check mark made up of words expressing Adam's personality and approach to life and work."></img>
                                </div>
                                <p className="experience-content">Perspective</p>
                            </div>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-6.jpg" className="img-fluid" alt="Adam as a coach giving a high five to an athlete who jus completed a challenging workout."></img>
                                </div>
                                <p className="experience-content">Coach</p>
                            </div>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-7.jpg" className="img-fluid" alt="Adam as a family man standing with his wife and kids"></img>
                                </div>
                                <p className="experience-content">Family Man</p>
                            </div>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-8.jpg" className="img-fluid" alt="A silhouette of a person meditating with a cross over their chest representing Adam's spiritual side containing equal parts Buddhist and Christian."></img>
                                </div>
                                <p className="experience-content"> Principles of an Eastern Body, Western Mind</p>
                            </div>
                            <div className="lightbox-content col-12 col-sm-6 col-md-4">
                                <div data-lightbox="photograph">
                                    <img src="../assets/img-9.jpg" className="img-fluid" alt="Adam as a lifelong student standing next to a classmate at his MBA graduation."></img>
                                </div>
                                <p className="experience-content">Lifelong Student</p>
                            </div>
                        </Row>
                    </SRLWrapper>
                </Container>
            </section>
        </div></Flip>
        


    )
}

export default Gallery;