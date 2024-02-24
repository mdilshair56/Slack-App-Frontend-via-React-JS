import React from "react";
import Button from 'react-bootstrap/Button';
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section1 = () => {
    return (
<div className="section1 col-lg-12 container-fluid">
    <div className="section1-heading col-lg-12">
        <h1 className="sec1-h1">Made for people.<br />
       <span className="sec1-h2">Built for productivity.</span></h1>
    </div>
    <div className="sec1-content">
        <p className="content1 col-md-5">
        Connect the right people, find anything you need and automate the rest.
         That's work in Slack your productivity platform.
        </p>
        <ul className="mb-2 section1-buttons">
          <Button variant="outline btn-light content-btn1" size="md">SIGN UP WITH EMAIL</Button>
         <img 
        //  style={{width:"50%", height:"20vh"}}
         className="google-img"
         src="https://brandeps.com/logo-download/G/Google-2015-Favicon-logo-vector-01.svg" 
         alt="Google Icon">
         </img>
          <Button variant="outline-light content-btn2" size="md">SIGN UP WITH GOOGLE</Button>
         </ul>
         <p className="content2">Slack is free to try for as long as you'd like</p>
    </div>
    <div className="video-1 col-md-6">
    <video width="727" height="480" controls={false} autoPlay muted className='video1'>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>  
    </div>
</div>
    )
}
export default Section1;