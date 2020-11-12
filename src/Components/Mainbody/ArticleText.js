import React, { Component } from 'react';
import "../../CSS/articleText.css"

function ArticleText(props) {
        return (
            <div className="article-text-container">  

                <div class="article-text">{props.articleContent}</div>
                
            </div>
        );
}

export default ArticleText;