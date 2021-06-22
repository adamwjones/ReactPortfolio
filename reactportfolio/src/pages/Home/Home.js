import React from "react";
// import styled, { keyframes } from 'styled-components';
// import { zoomIn } from 'react-animations';
import "../Home/home.css"



const Home = () => {
    // const fadeUpAnimation = keyframes`${zoomIn}`;
    // const FadeUp = styled.div`animation: 1s ${fadeUpAnimation};`;

    return (
        <div>
            <section className="about py-5">
                <div className="container">
                    <div className="about-content">
                        <div className="about-description">
                            <div className="signature">
                                <p className="m-0">Dream Big. Start Small. Stay Mindful.</p>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="../assets/jombotron.png" alt="Adam in action"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery py-5">
                <div className="container">
                    <div className="section-heading text-center">
                        <h1 className="heading-title">Experience</h1>
                    </div>

                    <div className="row">
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-1.jpg" data-lightbox="photograph">
                                <img src="../assets/img-1.jpg" className="img-fluid" alt="Adam as an entrepreneur standing with his team for his small business named CrossFit Press On."></img>
                            </a>
                            <p className="experience-content">Entrepreneur</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-2.jpg" data-lightbox="photograph">
                                <img src="../assets/img-2.jpg" className="img-fluid" alt="Adam as business performance improvement consultant standing in front of Wall Street's 'Charging Bull' statue."></img>
                            </a>
                            <p className="experience-content">Performance Improvement Advisor</p>
                        </div>
                        <div className="lightbox-content col-12 col-md-4">
                            <a href="../assets/img-3.jpg" data-lightbox="photograph">
                                <img src="../assets/img-3.jpg" className="img-fluid" alt="Adam as the commanding officer of an Army company standing in front of his soldiers in formation."></img>
                            </a>
                            <p className="experience-content">Commanding Officer</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-4.jpg" data-lightbox="photograph">
                                <img src="../assets/img-4.jpg" className="img-fluid" alt="
                    Adam as a certified 'leader' passing US Army Ranger School - the US military's premiere leadership school."></img>
                            </a>
                            <p className="experience-content">Leader</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-5.jpg" data-lightbox="photograph">
                                <img src="../assets/img-5.jpg" className="img-fluid" alt="A check mark made up of words expressing Adam's personality and approach to life and work."></img>
                            </a>
                            <p className="experience-content">Perspective</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-6.jpg" data-lightbox="photograph">
                                <img src="../assets/img-6.jpg" className="img-fluid" alt="Adam as a coach giving a high five to an athlete who jus completed a challenging workout."></img>
                            </a>
                            <p className="experience-content">Coach</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-7.jpg" data-lightbox="photograph">
                                <img src="../assets/img-7.jpg" className="img-fluid" alt="Adam as a family man standing with his wife and kids"></img>
                            </a>
                            <p className="experience-content">Family Man</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-8.jpg" data-lightbox="photograph">
                                <img src="../assets/img-8.jpg" className="img-fluid" alt="A silhouette of a person meditating with a cross over their chest representing Adam's spiritual side containing equal parts Buddhist and Christian."></img>
                            </a>
                            <p className="experience-content"> Principles of an Eastern Body, Western Mind</p>
                        </div>
                        <div className="lightbox-content col-12 col-sm-6 col-md-4">
                            <a href="../assets/img-9.jpg" data-lightbox="photograph">
                                <img src="../assets/img-9.jpg" className="img-fluid" alt="Adam as a lifelong student standing next to a classmate at his MBA graduation."></img>
                                <p className="experience-content">Lifelong Student</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials py-5">
                <div className="container">
                    <div className="section-heading text-center">
                        <h1 className="heading-title">Education</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div id="myCarousel" className="carousel-slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="img-box">
                                        <img src="../assets/school-1.jpg" alt="Penn State"></img>
                                    </div>
                                    <p className="testimonial">Bachelor of Science, Marketing & Management 2005
                                    </p>
                                    <p className="customer"><strong>Penn State</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="../assets/school-2.jpg" alt="Norwich"></img>
                                    </div>
                                    <p className="testimonial">MBA, Finance 2011</p>
                                    <p className="customer"><strong>Norwich University</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="../assets/school-3.jpg" alt="Villanova"></img>
                                    </div>
                                    <p className="testimonial">Master Certificate, Project Management 2013</p>
                                    <p className="customer"><strong>Villanova</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="../assets/school-4.jpg" alt="Wisconsin-Madison"></img>
                                    </div>
                                    <p className="testimonial">Capstone Certificate, UX Design 2019</p>
                                    <p className="customer"><strong>Wisconsin-Madison</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="../assets/school-5.jpg" alt="Rutgers University"></img>
                                    </div>
                                    <p className="testimonial">Full Stack Web Development and Coding Bootcamp 2020 (expected)</p>
                                    <p className="customer"><strong>Rutgers University</strong></p>
                                </div>

                            </div>

                            <a className="left carousel-control carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>


                            <a className="right carousel-control carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default Home;