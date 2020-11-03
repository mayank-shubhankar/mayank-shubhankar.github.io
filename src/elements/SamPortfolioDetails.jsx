import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import HeaderSix from "../component/header/HeaderSix";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

const SocialTrends = [
    {
        image : '01',
        title : 'Seek Attention',
        imageName : 'SeekAttention'
    },
    {
        image : '02',
        title : 'Accomplish more at one place',
        imageName : 'AccomplishMore'
    },
    {
        image : '03',
        title : 'Get to the relevant content faster',
        imageName : 'RelevantFaster'
    },
    {
        image : '04',
        title : 'Discover or meet new people',
        imageName : 'DiscoverPeople'
    },
        {
        image : '05',
        title : 'Look for better experience',
        imageName : 'BetterExperience'
    },
    {
        image : '06',
        title : 'Value privacy and safety',
        imageName : 'ValuePrivacy'
    },
    {
        image : '07',
        title : 'Communicate even more in even less',
        imageName : 'CommunicateMore'
    },
    {
        image : '08',
        title : 'Decreasing life-span of things or content',
        imageName : 'DecreasingSpan'
    },
    {
        image : '09',
        title : 'Prefer groups with known people',
        imageName : 'PreferKnown'
    },
    {
        image : '10',
        title : 'Look for Transparency',
        imageName : 'AccomplishMore'
    },
    {
        image : '11',
        title : 'Creative Communication',
        imageName : 'RelevantFaster'
    },
    {
        image : '12',
        title : 'Prefer asynchronous ways',
        imageName : 'RelevantFaster'
    }
]

const TechTrends = [
    {
        image : '01',
        title : 'Seek Attention',
        imageName : 'SeekAttention'
    },
    {
        image : '02',
        title : 'Accomplish more at one place',
        imageName : 'AccomplishMore'
    },
    {
        image : '03',
        title : 'Get to the relevant content faster',
        imageName : 'RelevantFaster'
    },
    {
        image : '04',
        title : 'Discover or meet new people',
        imageName : 'DiscoverPeople'
    },
        {
        image : '05',
        title : 'Look for better experience',
        imageName : 'BetterExperience'
    },
    {
        image : '06',
        title : 'Value privacy and safety',
        imageName : 'ValuePrivacy'
    },
    {
        image : '07',
        title : 'Communicate even more in even less',
        imageName : 'CommunicateMore'
    },
    {
        image : '08',
        title : 'Decreasing life-span of things or content',
        imageName : 'DecreasingSpan'
    },
    {
        image : '09',
        title : 'Prefer groups with known people',
        imageName : 'PreferKnown'
    },
    {
        image : '10',
        title : 'Look for Transparency',
        imageName : 'AccomplishMore'
    },
    {
        image : '11',
        title : 'Creative Communication',
        imageName : 'RelevantFaster'
    },
    {
        image : '12',
        title : 'Prefer asynchronous ways',
        imageName : 'RelevantFaster'
    }
]


class SamPortfolioDetails extends Component{
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
                <PageHelmet pageTitle='Internship at Samsung' />
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
                                        <h2>What is next for messaging ?</h2>
                                        <p className="subtitle"> Define the next messaging app that aligns with Samsung's philosophy, increases revenue and makes people addicted.</p>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p> */}


                                        <div className="bauder portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Type of Project</span>
                                                <h4>Internship at Samsung Research Institute, Bangalore</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Time of Project</span>
                                                <h4>May 2017 - Jul 2017</h4>
                                            </div>

                                        </div>

                                        {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div> */}

                                        <h4 className="title">Samsung's Philosphy</h4>
                                        <p>Project started with a clear understanding of Samsung's philosophy. There are 3 pillars of Samsung's philosophy.</p>
                                        
                                        <div class="bauder row">
                                            <div class="col-lg-4">
                                                <table class = "table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Meaningful Innovation</th>
                                                        </tr> 
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <td>Samsung envisions innovative designs that integrate cutting edge technology with personal value to create devices that deliver a purposeful consumer driven experience.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-lg-4">
                                            <table class = "table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Minimal Futurism</th>
                                                        </tr> 
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <td>Samsung's strategy is to find a perfect combination of technology and design while retaining both a futuristic and minimal look and feel.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-lg-4">
                                            <table class = "table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Harmonized Presence</th>
                                                        </tr> 
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <td>Samsung's devices and solutions are a step towards achieving an ecosystem where each pne of them co-exist harmonipously.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                
                                            </div>
                                        </div>
                                        
                                        <h4 className="title">Secondary Research</h4>
                                        <p>Secondary research was done, reading through research papers and popular reports like Gartner, Google Trends, Samsung Internal Reports. An analysis of existing trends in the market was also done.</p>
                                        <div class="row">
                                            <div class="col-4 justify-content-center text-center">
                                            <img src="/assets/images/portfolio/report.png" class="mx-auto d-block inner-image" alt="Portfolio Images"/>
                                            <p className = "image-description">Reports</p>
                                            </div>
                                        
                                            <div class="col-4 justify-content-center text-center">
                                            <img src="/assets/images/portfolio/MarketResearch.png" class="mx-auto d-block inner-image" alt="Portfolio Images"/>
                                            <p className = "image-description">Market Research</p>
                                            </div>
                                        
                                            <div class="col-4 justify-content-center text-center">
                                            <img src="/assets/images/portfolio/ResearchPapers.png" class="mx-auto d-block inner-image" alt="Portfolio Images"/>
                                            <p className = "image-description">Research Papers</p>
                                            </div>
                                          
                                        </div>
                                        
                                        <div className="bauder row d-block">
                                            <p>Social, Technology and Business Trends were analyzed out of these artifacts which set the goal of user interview.</p>
                                            <img src="/assets/images/portfolio/matrix.png" class="mx-auto d-block" alt="Portfolio Images"/>
                                            <p className = "text-center image-description">Social, Technology and Business Trends</p>
                                        </div>
                                        
                                        {/* <table class="table col-sm-12">
                                            <thead>
                                                <tr>
                                                <th scope="col">Meaningful Innovation</th>
                                                <th scope="col">Minimal Futurism</th>
                                                <th scope="col">Harmonized Presence</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Samsung envisions innovative designs that integrate cutting edge technology with personal value to create devices that deliver a purposeful consumer driven experience.</td>
                                                <td>Samsung's strategy is to find a perfect combination of technology and design while retaining both a futuristic and minimal look and feel.</td>
                                                <td>Samsung's devices and solutions are a step towards achieving an ecosystem where each pne of them co-exist harmonipously.</td>
                                                </tr>
                                            </tbody>
                                            </table>      */}

                                        
                                        <h4 className="title">Social Trends</h4>
                                        <p>Social Trends were analyzed and following most important trends were identified.</p>
                                        
                                        <div class="bauder row">
                                        {SocialTrends.map((val , i) => (
                                                    <div key={i} class="col-lg-3 col-4 justify-content-center text-center">
                                                        <img src={`/assets/images/portfolio/${val.imageName}.png`} class="mx-auto d-block inner-image" alt="Portfolio Images"/>
                                                        <p className = "image-description">{val.title}</p>
                                                    </div>
                                                    ))} 
                                        </div>

                                        
                                        {/* <h4 className="title">Technology Trends</h4>
                                        <p>Technology Trends were analyzed and following most important trends were identified.</p>
                                        
                                        <div class="bauder row">
                                        {TechTrends.map((val , i) => (
                                                    <div key={i} class="col-lg-3 col-4 justify-content-center text-center">
                                                        <img src={`/assets/images/portfolio/${val.imageName}.png`} class="mx-auto d-block inner-image" alt="Portfolio Images"/>
                                                        <p className = "image-description">{val.title}</p>
                                                    </div>
                                                    ))} 
                                        </div>

                                        <h4 className="title">Technology Trends</h4>
                                        <p>Technology Trends were analyzed and following most important trends were identified.</p> */}

                                    </div>
                                    {/* <div className=" bauder thumb mb--30"> */}
                                        {/* <picture>
                                            <source media="(min-width:650px)" srcset="/assets/images/portfolio/CompetitiveAnalysis.png"/>
                                            <source media="(min-width:320px)" srcset="/assets/images/portfolio/CompetitiveAnalysis.png"/>
                                            <img src="/assets/images/portfolio/CompetitiveAnalysis.png" alt="Portfolio Images" />
                                        </picture> */}
                                            {/* <img src="/assets/images/portfolio/CompetitiveAnalysis.png" alt="Portfolio Images"
                                                srcset="/assets/images/portfolio/CompetitiveAnalysis.png 320w,
                                                        /assets/images/portfolio/2.3.png 960w"
                                                /> */}
                                    {/* </div> */}
                                    {/* <div className="inner">
                                        <h4 className="title">User Interviews</h4>
                                        <p>User interview was conducted with 50 people, spanning across geographies and time zones.</p>
                                        
                                        <p><span>Goal :</span> To understand the behavioural and usage patterns while messaging over mobile phones in terms of</p>
                                        <ul>
                                            <li>When do users communicate and how?</li>
                                            <li>What are their activities over communication?</li>
                                            <li>What are their motivation for these activities?</li>
                                        </ul>    
                                        <p><span>Probing questions and pointers:</span></p>
                                        <ul>
                                            <li>Messaging apps available on mobile</li>
                                            <li>What do you do with these messaging apps?</li>
                                            <li>Why some messaging app more frequent than the other?</li>
                                            <li>A typical day in life using these messaging apps:</li>
                                                <ul>
                                                    <li>Sharing images, jokes, content, media</li>
                                                    <li>Receiver's reaction</li>
                                                    <li>Pattern of reaching out to more than one audience? {`>`} motivation</li>
                                                        <ul>
                                                            <li>Editing pictures?</li>
                                                            <li>Content Pattern (Video, images, text, emojis)</li>
                                                        </ul>
                                                </ul>
                                                <ul>
                                                    <li>Sharing images, jokes, content, media</li>
                                                    <li>Receiver's reaction</li>
                                                    <li>Pattern of reaching out to more than one audience? {`>`} motivation</li>
                                                        <ul>
                                                            <li>Editing pictures?</li>
                                                            <li>Content Pattern (Video, images, text, emojis)</li>
                                                        </ul>
                                                </ul>
                                        </ul>
                                        
                                        {/* </div> */}
                                    {/* </div> */} 
                                               
                                    <div className="portfolio-thumb-inner">
                                        {/* <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div> */}
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/2.3.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/2.4.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/2.5.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/2.6.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/2.7.png" alt="Portfolio Images"/>
                                        </div>

                                        {/* <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div> */}
                                    </div>
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
                                        <a href="/zycus">
                                            <img src="/assets/images/portfolio/zycus.png" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/zycus">AI Bots - Zycus Merlin Studio</a></h4>
                                        <span className="category">Product Management at Zycus</span>
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
export default SamPortfolioDetails;
