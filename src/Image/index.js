import React, { useState } from 'react';
import './index.css';


export default function Image(props) {
    if (props.sideBool === true)
    {
        return (
            <div  className="image-container">
                <img className="leftImage" src={props.src}></img>
            </div>
        );
    }

    else
    {
        return (
            <div className="image-container">
                <img className="rightImage" src={props.src}></img>
            </div>
        );
    }
    
}