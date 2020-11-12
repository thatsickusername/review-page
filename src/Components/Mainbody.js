import React, { Component } from 'react';
import "../font-awesome/css/font-awesome.min.css"
import "../CSS/MainBody.css"
import ArticleData from "../Data/ArticleData.js"
import HeaderText from "./Mainbody/HeaderText.js"
import ArticleText from "./Mainbody/ArticleText.js"

class Mainbody extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            articleHeading: "",
            articleThumbnail: "",
            articleContent: ""
        };
      }
    render() {

        this.state = ArticleData[0]

        return (
               <div className="main-body">
                    <div className="flex-container">

                        <HeaderText 
                            articleHeading={this.state.articleHeading}
                            articleSubHeading={this.state.articleSubHeading}
                            articleThumbnail={this.state.articleThumbnail}
                        />

                        <ArticleText 
                            articleContent={this.state.articleContent}
                        />

                        <a href="#" className="button">Review Now</a>

                    </div>
                </div>
         );
    }
}

export default Mainbody;