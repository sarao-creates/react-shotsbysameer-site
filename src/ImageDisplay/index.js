import { Card, CardHeader } from '@material-ui/core';
import React from 'react';
import './index.css';

export default function ImageDisplay (props) {

    if (props.sideBool === true)
    {
        return (
            <div className="panelImage">
                <div className="image-container-left">
                    <img className="leftImage" src={props.src}></img>
                </div>
                <Card className="card card-right">
                    <CardHeader title={props.cardTitle} subheader={props.cardDescription}></CardHeader>
                </Card>
            </div>


        );
    }

    else
    {
        return (
            <div className="panelImage">
                <Card className="card card-left">
                    <CardHeader title={props.cardTitle} subheader={props.cardDescription}></CardHeader>
                </Card>
                <div className="image-container-right">
                    <img className="rightImage" src={props.src}></img>
                </div>
            </div>

        );
    }
}