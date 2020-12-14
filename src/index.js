import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import './index.css';

function App() {
    let side = true;
    const handleSide = () => {
        side = !side;
        return side ? false : true;
    }


    return (
        <div className="content">
            <div className="fullScreen">
                <div className="leftSide">
                    <div className="logo"></div>
                    <div className="name">
                        <h1>@ShotsBySameer</h1>
                    </div>
                    <div className="blurb">
                        <p>Photography by <a className="link" href="https://www.instagram.com/sameer__rao/" target="_blank">Sameer Rao</a></p>
                    </div>
                </div>

                <div className="rightSide">

                </div>
            </div>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5e9347965cf940175c148a39/vsco5e9347989a1c9.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5d187b75126e51723f527a53/vsco5d187b806ac35.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5d18ae93752a587e1da2eae1/vsco5d18ae9de25c9.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5d188c8e61eeb37610995089/vsco5d188c97dd92b.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5cdcda59b038832716ce5c03/vsco5cdcda5c958a2.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5b5cdac0991ceb2c4188f8b2/vsco5b5cdac3d46ab.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5b5c78c0f111fe1208bb8a09/vsco5b5c78c5865e5.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5b21c133032a130514551c4a/vsco5b21c13dced43.jpg?w=480"></Image>
            <Image sideBool={handleSide()} src="https://im.vsco.co/1/578aeb7366c1821142832/578bee6bb4dfd1235367647a/vsco_071716.jpg?w=480"></Image>
            
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));