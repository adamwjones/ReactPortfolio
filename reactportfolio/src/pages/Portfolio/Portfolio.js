import React from "react";
import "../Home/home.css";
import { Row, Container, Col } from "../../components/Grid/index";
import { Carousel } from "react-bootstrap";
import Summary from "../../components/Summary/Summary";


const Portfolio = () => {
    return (
        <div>
                        <section className="testimonials py-5">
                <Container>
                    <div className="section-heading text-center">
                        <h1 className="heading-title">Coding and UX Design Projects</h1>
                    </div>
                </Container>
                <Container>
                    <Row className="">
                        <Col size="md-12">
                            <Carousel >
                                <Carousel.Item>
                                <div className="img-box-pro">
                                        <a href="https://manuelpierre.github.io/MoreFootballLessCovid/" rel="noreferrer" target="_blank">
                                            <img src="../assets/MFLC.jpeg" alt="More Football Less COVID app"></img>
                                        </a>
                                    </div>
                                    <p className="testimonial">Team Coding Project which integrates multiple APIs to calculate COVID Risk per NFL city</p>
                                    <p className="customer"><strong>"More Football Less COVID app"</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className="img-box-pro">
                                        <a href="https://adamwjones.github.io/Weather-Dashboard/" rel="noreferrer" target="_blank">
                                            <img src="../assets/weather.jpeg" alt="Weather Dashboard app"></img>
                                        </a>
                                    </div>
                                    <p className="testimonial">Individual coding project which retrieves data from the OpenWeather API and dynamically updates for selected cities</p>
                                    <p className="customer"><strong>"Weather Dashboard app"</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className="img-box-pro">
                                        <a href="https://adamwjones.github.io/Password-Generator/" rel="noreferrer" target="_blank">
                                            <img src="../assets/password-screenshot.png" alt="Password Generator app"></img>
                                        </a>
                                    </div>
                                    <p className="testimonial">Individual coding project which randomly generates passwords based on the user's selections</p>
                                    <p className="customer"><strong>"Password Generator app"</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className="img-box-pro">
                                        <a href="../assets/Onebody.png" data-lightbox="photograph">
                                            <img src="../assets/Onebody.png" className="img-fluid" alt="OneBody.ai UX design"></img></a>
                                    </div>
                                    <p className="testimonial">Professional team UX design project aimed at reinventing CRM for fitness studios</p>
                                    <p className="customer"><strong>"OneBody.ai UX design"</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className="img-box-pro2">
                                        <a href="../assets/stacks2.png" data-lightbox="photograph">
                                            <img src="../assets/stacks2.png" className="img-fluid" alt="Stacks UX design"></img></a>
                                    </div>
                                    <p className="testimonial">Individual UX design project aimed at reinventing CRM for fitness studios while on the go</p>
                                    <p className="customer"><strong>"Stacks UX design"</strong></p>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>

        <Summary />
        </div>
    );
};

export default Portfolio;