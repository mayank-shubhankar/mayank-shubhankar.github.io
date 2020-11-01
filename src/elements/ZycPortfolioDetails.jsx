import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import HeaderSix from "../component/header/HeaderSix";
import Footer from "../component/footer/Footer";



class ZycPortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Product Management at Zycus' />
                <HeaderSix homeLink="/" logo="symbol-dark" color="color-black"/>

                {/* <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" /> */}
                
                {/* Start Breadcrump Area */}
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Getting tickets to the big show</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>AI Spend Bots (Zycus Merlin Studio)</h2>
                                        <p className="subtitle"> Involved in the conceptualization and final delivery of two bots from Spend Analysis team at Zycus.</p>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p> */}


                                        <h4 className="title">Fill the Google Form at the link below to get access to the project.</h4>
                                        {/* <p>Project started with a clear understanding of Samsung's philosophy. There are 3 pillars of Samsung's philosophy.</p>
                                         */}
                                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_Pa0LhwCky-1cmt5EkhQEFQ43Bhe72rgPan-3PjDh7Y3JZA/viewform?embedded=true" width="100%" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                        
                                        
                                        
                                        
                                    </div>
                                    
                                    
                                               
                                    {/* <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/2.3.png" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Other Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/samsung">
                                            <img src="/assets/images/portfolio/samsung.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/samsung">What is next for messaging</a></h4>
                                        <span className="category">Samsung Research and Development Institute</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/microsoft">
                                            <img src="/assets/images/portfolio/microsoft.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/microsoft">Exploration on Healthcare</a></h4>
                                        <span className="category">Microsoft Research, Bangalore</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />  


            </React.Fragment>
        )
    }
}
export default ZycPortfolioDetails;
