import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Experience",
        tab2 = "Internships",
        tab3 = "Awards",
        tab4 = "Education & Certification";
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
                                                    <a >Associate Product Lead - Merlin AI Bot<span> (July 2020 - Till now)</span></a>
                                                    Responsible for conceptualizing bots like Payment Term Maximizer, Price Predictor, writing user stories, prioritizing bugs, etc.
                                                </li>
                                                <li>
                                                    <a >Associate Product Lead - iSource<span> (Feb 2020 - June 2020)</span></a>
                                                    Responsible for conceptualizing bots like Payment Term Maximizer, Price Predictor, writing user stories, prioritizing bugs, etc.
                                                </li>
                                                <li>
                                                <a >Associate UX Lead - iAnalyze and Insight Studio<span> (April 2019 - Jan 2020)</span></a>
                                                    Responsible for conceptualizing bots like Payment Term Maximizer, Price Predictor, writing user stories, prioritizing bugs, etc.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               <a >Associate Product Lead - Merlin AI Bot<span> (July 2020 - Till now)</span></a>
                                                    Responsible for conceptualizing bots like Payment Term Maximizer, Price Predictor, writing user stories, prioritizing bugs, etc.
                                               </li>
                                               <li>
                                               <a >Associate Product Lead - Merlin AI Bot<span> (July 2020 - Till now)</span></a>
                                                    Responsible for conceptualizing bots like Payment Term Maximizer, Price Predictor, writing user stories, prioritizing bugs, etc.
                                               </li>
                                               <li>
                                               <a >Associate Product Lead - Merlin AI Bot<span> (July 2020 - Till now)</span></a>
                                                    Responsible for conceptualizing bots like Payment Term Maximizer, Price Predictor, writing user stories, prioritizing bugs, etc.
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Sr. Front-end Engineer<span> - Google</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BSc In CSE<span> - ABC University, Los Angeles, CA</span></a> 2010
                                               </li>
                                               <li>
                                                   <a href="/service">Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2009
                                               </li>
                                               <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
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