import React, { useState } from 'react';
import './index.css';

export default function Image(props) {

    if (props.side === true)
    {
        return (
            <div>
                <img className="leftImage" src={props.src}></img>
            </div>
        );
    }

    else
    {
        return (
            <div>
                <img className="rightImage" src={props.src}></img>
            </div>
        );
    }
    
}