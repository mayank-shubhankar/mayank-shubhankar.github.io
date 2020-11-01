import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Work Experience",
        tab2 = "Internships",
        tab3 = "Achievements",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a >Associate Product Lead, Data Science | Zycus, Mumbai, India<span> (Aug 2020 - Till date)</span></a>
                                                        Responsible for conceptualizing and delivering bots like Payment Term Maximizer, Price Predictor by writing user stories, prioritizing bugs, optimizing performance, etc.
                                                </li>
                                                <li>
                                                    <a >Associate Product Lead, iSource | Zycus, Mumbai, India<span> (Feb 2020 - July 2020)</span></a>
                                                        Defined the product roadmap to include Approval Workflow in Quick source, a feature liked by DOW Chemicals, Nissan, Porsche, etc.
                                                </li>
                                                <li>
                                                <a >Associate UX Lead - iAnalyze and Insight Studio | Zycus, Mumbai, India<span> (Apr 2019 - Jan 2020)</span></a>
                                                    Conceptualized the biggest UX revamp in Zycus’s history, named Dewdrops, for analytical and reporting tools from Zycus suite, called iAnalyze and Insight Studio.
                                                </li>
                                                <li>
                                                <a > UX Designer | ETMONEY, Gurgaon, India<span> (Jun 2018 - Feb 2019)</span></a>
                                                    Planned the release of the first credit product at ETMONEY, a personal loan offering powered by Fullerton India.

                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               <a >UX Intern | Samsung RnD Institute, Bangalore, India<span> (May 2017 - Jul 2017)</span></a>
                                                    Worked to define the next messaging application within Samsung Design Framework.
                                               </li>
                                               <li>
                                               <a >UX Intern | Microsoft Research Centre, Bangalore, India<span> (Jan 2017 - Apr 2017)</span></a>
                                                    Worked with Microsoft Research Lab for an app based intervention in Healthcare for Tier 1 and lowerer cities of India.
                                               </li>
                                               <li>
                                               <a >UX Design Intern | The Minimalist, Mumbai, India<span> (May 2016 - Jul 2016)</span></a>
                                                    Worked for stretegic UX development of various clients that worked with the company.
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a >Institute Silver Medal<span> - Jun 2018</span></a> Awarded on account of being topper of Department of Design.
                                               </li>
                                               <li>
                                                    <a >Institute Merit Scholarships<span> - 2014 and 2016</span></a> Awarded on account of being yearly topper in 2016 and 2014.
                                               </li>
                                               <li>
                                                    <a >National Science Seminar<span> - Sep 2009</span></a>  Represented Indian state of Jharkhand at National Level.
                                               </li>
                                               <li>
                                                    <a >Distinction in classical vocal music<span> - Nov 2008</span></a>  from Pracheen Kala Kendra, Chandigarh.
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a >Bachelor in Design<span> - Indian Institute of Technology, Guwahati, India</span></a> CPI : 9.33 / 10
                                               </li>
                                               <li>
                                                   <a >High Schooling<span> - St. Joseph Senior Sec. School, CBSE</span></a> CBSE, 12th : 94.4%
                                               </li>
                                               <li>
                                                   <a >Matriculation<span> - Ramakrishna Mission Vidyapith, Deoghar, India</span></a> CBSE, 10th : 10/10
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;