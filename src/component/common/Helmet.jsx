import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Mayank Shubhankar's Portfolio </title>
                    <meta name="description" content="This is Mayank's portfolio" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
