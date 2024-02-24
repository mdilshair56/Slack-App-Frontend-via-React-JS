import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section4 = () => {
    return (
<div className="section4 col-lg-12">
<section class="row section-3">
    <div class="col-md-6 video-2 ">
    <video width="620" height="480" controls={false} autoPlay muted className='video3 video4'>
        <source src="/videos/connectedness.webm" type="video/mp4" />
      </video> 
    </div>
    <div class="col-md-6 sect3-content"> 
      <h1 class="section-3-heading">Bring your team together</h1>
       <p class="section-3-content">At the heart of Slack are channels: organized spaces for everyone and everything you need for work. 
        In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
      <a href="#home" className="link1"><p class="section-3-link link4">Learn more about channels <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
      </div>
    </section>
</div>
    )
}
export default Section4;