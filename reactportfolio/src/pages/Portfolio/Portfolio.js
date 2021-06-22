import React from "react";
import "../Portfolio/Portfolio.css";


const Portfolio = () => {
    return (
        <div>

            <section className="testimonials py-5">
                <div className="container">
                    <div className="section-heading text-center">
                        <h1 className="heading-title">Coding and UX Design Projects</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="img-box-pro">
                                        <a href="https://manuelpierre.github.io/MoreFootballLessCovid/" rel="noreferrer" target="_blank">
                                            <img src="../assets/MFLC.jpeg" alt="More Football Less COVID app"></img>
                                        </a>
                                    </div>
                                    <p className="testimonial">Team Coding Project which integrates multiple APIs to calculate COVID Risk per NFL city</p>
                                    <p className="customer"><strong>"More Football Less COVID app"</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box-pro">
                                        <a href="https://adamwjones.github.io/Weather-Dashboard/" rel="noreferrer" target="_blank">
                                            <img src="../assets/weather.jpeg" alt="Weather Dashboard app"></img>
                                        </a>
                                    </div>
                                    <p className="testimonial">Individual coding project which retrieves data from the OpenWeather API and dynamically updates for selected cities</p>
                                    <p className="customer"><strong>"Weather Dashboard app"</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box-pro">
                                        <a href="https://adamwjones.github.io/Password-Generator/" rel="noreferrer" target="_blank">
                                            <img src="../assets/password-screenshot.png" alt="Password Generator app"></img>
                                        </a>
                                    </div>
                                    <p className="testimonial">Individual coding project which randomly generates passwords based on the user's selections</p>
                                    <p className="customer"><strong>"Password Generator app"</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box-pro">
                                        <a href="../assets/Onebody.png" data-lightbox="photograph">
                                            <img src="../assets/Onebody.png" className="img-fluid" alt="OneBody.ai UX design"></img></a>
                                    </div>
                                    <p className="testimonial">Professional team UX design project aimed at reinventing CRM for fitness studios</p>
                                    <p className="customer"><strong>"OneBody.ai UX design"</strong></p>
                                </div>

                                <div className="item carousel-item">
                                    <div className="img-box-pro2">
                                        <a href="../assets/stacks2.png" data-lightbox="photograph">
                                            <img src="../assets/stacks2.png" className="img-fluid" alt="Stacks UX design"></img></a>
                                    </div>
                                    <p className="testimonial">Individual UX design project aimed at reinventing CRM for fitness studios while on the go</p>
                                    <p className="customer"><strong>"Stacks UX design"</strong></p>
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

            <div className="container py-5">
                <div className="section-heading text-center">
                    <h1 className="heading-title">Summary</h1>
                </div>
                <p className="m-0">Possesses a diverse set of professional experiences across military leadership and logistics, financial services operations and technology consulting, and small business ownership and management. Has a broad educational background including marketing, finance, project management, user experience design, and full-stack web development. Is competent at designing prototypes in software such as Adobe XD, proficient in frontend web development, has a strong understanding of APIs and integration, and has led numerous project/product teams from start to finish.</p>
            </div>

            <div className="container py-5">
                <div className="section-heading text-center">
                    <h1 className="heading-title">EY - Senior Manager - Present</h1>
                </div>
                <p className="m-0">Provides advisory services to global-leading financial institutions and other capital market participants as a member of EY’s Financial Services Office.  Provides clients with recommendations and solutions to help identify, measure, manage, and monitor the market, credit, operational, and regulatory risks associated with their trading, asset-liability management, capital management, tax reporting, and other capital markets activities.</p>
            </div>

            <div className="container py-5">
                <div className="section-heading text-center">
                    <h1 className="heading-title">CrossFit Press On - Owner - Present</h1>
                </div>
                <p className="m-0">Provides clients with all aspects of personal and physical coaching needed to foster their personal transformation which occurs when they truly see what they are capable of achieving. Our goal is to help our clients develop the tools they need to push through the self-limiting stories they’ve told themselves for years. We <strong>Press On</strong> to this objective every single day. </p>
            </div>

            <div className="container py-5">
                <div className="section-heading text-center">
                    <h1 className="heading-title">US Army - Logistics Officer - 2006-2014</h1>
                </div>
                <p className="m-0">Served a tour in Afghanistan and Iraq, earned the rank of captain, commanded a logistics company in combat, graduated both the U.S. Army Airborne School and Ranger School, awarded the Bronze Star Medal, Meritorious Service Medal with oak leaf cluster, Army Commendation Medal, Army Achievement Medal, the Combat Action Badge, the Afghanistan Campaign Medal, the Iraq Campaign Medal, and various campaign/service medals. Served in both the 25th Infantry Division and the 101st Airborne Division.</p>
            </div>

        </div>
    );
};

export default Portfolio;