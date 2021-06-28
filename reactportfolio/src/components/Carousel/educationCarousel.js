import React from "react";
import { Row, Container, Col } from "../../components/Grid/index";
import { Carousel } from "react-bootstrap";

const EducationCarousel = () => {

    return (
        <div>
            <section className="testimonials py-5">
                <Container>
                    <div className="section-heading text-center">
                        <h1 className="heading-title">Education</h1>
                    </div>
                </Container>
                <Container>
                    <Row className="">
                        <Col size="md-12">
                            <Carousel >
                                <Carousel.Item>
                                    <div className="img-box">
                                        <img src="../assets/school-1.jpg" alt="Penn State"></img>
                                    </div>
                                    <p className="testimonial">Bachelor of Science, Marketing & Management 2005
                                    </p>
                                    <p className="customer"><strong>Penn State</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img-box">
                                        <img src="../assets/school-2.jpg" alt="Norwich"></img>
                                    </div>
                                    <p className="testimonial">MBA, Finance 2011</p>
                                    <p className="customer"><strong>Norwich University</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img-box">
                                        <img src="../assets/school-3.jpg" alt="Villanova"></img>
                                    </div>
                                    <p className="testimonial">Master Certificate, Project Management 2013</p>
                                    <p className="customer"><strong>Villanova</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img-box">
                                        <img src="../assets/school-4.jpg" alt="Wisconsin-Madison"></img>
                                    </div>
                                    <p className="testimonial">Capstone Certificate, UX Design 2019</p>
                                    <p className="customer"><strong>Wisconsin-Madison</strong></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img-box">
                                        <img src="../assets/school-5.jpg" alt="Rutgers University"></img>
                                    </div>
                                    <p className="testimonial">Full Stack Web Development and Coding Bootcamp 2020</p>
                                    <p className="customer"><strong>Rutgers University</strong></p>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default EducationCarousel;