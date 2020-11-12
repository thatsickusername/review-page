import React from 'react';
import "../../CSS/HeaderText.css"

function HeaderText(props) {
        return (
            <div>

                <div className="article-heading">{props.articleHeading}</div>
                
                <div className="article-sub-heading">{props.articleSubHeading}</div>   
            
                <img className="img" src={props.articleThumbnail} alt=""/>
            
            </div>
        );
}

export default HeaderText;