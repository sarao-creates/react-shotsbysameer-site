import React, { useState } from 'react';
import './index.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export default function Image(props) {
    if (props.sideBool === true)
    {
        return (
            <div  className="image-container">
                <img className="leftImage" src={props.src}></img>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />

                </Card>
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