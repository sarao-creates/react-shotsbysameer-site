import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import ImageDisplay from './ImageDisplay';
// import { Tabs, Tab } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import CameraIcon from '@material-ui/icons/Camera';

import './index.css';
import PhotoGrid from './PhotoGrid';

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
                    <div className="logo"><CameraIcon style={{color: 'white', fontSize: 40}}></CameraIcon></div>
                    <div className="name">
                        <h1>@ShotsBySameer</h1>
                    </div>
                    <div className="blurb">
                        <p>Photography &amp; Stories by <a className="link" href="https://www.instagram.com/sameer__rao/" target="_blank">Sameer Rao</a></p>
                    </div>
                    <div className="socials">
                        <a href="https://www.instagram.com/shotsbysameer/" target="_blank">
                            <InstagramIcon style={{color: 'white', fontSize: 40}}></InstagramIcon>
                        </a>

                        <a href="https://twitter.com/sameer___rao" target="_blank">
                            <TwitterIcon style={{color: 'white', fontSize: 40}}></TwitterIcon>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/sameer-r/" target="_blank">
                            <LinkedInIcon style={{color: 'white', fontSize: 40}}></LinkedInIcon> 
                        </a>
                    </div>
                </div>

                <div className="rightSide">
                </div>
            </div>

            
            
            <PhotoGrid></PhotoGrid>

            {/* <ImageDisplay sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5e9347965cf940175c148a39/vsco5e9347989a1c9.jpg?w=480" cardTitle="Basilica di Santa Maria della Salute" cardDescription="Venice, Italy"></ImageDisplay>
            <ImageDisplay sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5d187b75126e51723f527a53/vsco5d187b806ac35.jpg?w=480" cardTitle="Taj Mahal Palace Hotel" cardDescription="Mumbai, India"></ImageDisplay>

            <div className="photo-showcase">
                {/* <Tabs className="location-tabs"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="disabled tabs example">
                    <Tab label="Italy"/>
                    <Tab label="India"/>
                    <Tab label="France"/>
                    <Tab label="England"/>
                    <Tab label="United States"/>
                </Tabs> }

            </div> */}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


{/* <Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5d18ae93752a587e1da2eae1/vsco5d18ae9de25c9.jpg?w=480"></Image>
<Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5d188c8e61eeb37610995089/vsco5d188c97dd92b.jpg?w=480"></Image>
<Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5cdcda59b038832716ce5c03/vsco5cdcda5c958a2.jpg?w=480"></Image>
<Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5b5cdac0991ceb2c4188f8b2/vsco5b5cdac3d46ab.jpg?w=480"></Image>
<Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5b5c78c0f111fe1208bb8a09/vsco5b5c78c5865e5.jpg?w=480"></Image>
<Image sideBool={handleSide()} src="https://im.vsco.co/aws-us-west-2/c12173/21142832/5b21c133032a130514551c4a/vsco5b21c13dced43.jpg?w=480"></Image>
<Image sideBool={handleSide()} src="https://im.vsco.co/1/578aeb7366c1821142832/578bee6bb4dfd1235367647a/vsco_071716.jpg?w=480"></Image>  */}