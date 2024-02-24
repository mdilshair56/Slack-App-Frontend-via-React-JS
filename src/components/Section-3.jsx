import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section3 = () => {
    return (
<div className="section3 col-lg-12">
<div class="row section-3">
  <div class="col-md-6 sect3-content"> 
    <h1 class="section-3-heading">Choose how you want to work</h1>
     <p class="section-3-content">In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. 
      You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.</p>
    <a href="#home" className="link1"><p class="section-3-link">Learn more about flexible communication  <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
    </div>
  <div class="col-md-6 video-3 ">
<video width="620" height="480" controls={false} autoPlay muted className='video3 video-3'>
        <source src="/videos/ia4-flexibility.webm" type="video/mp4" />
      </video> 
</div>
  </div> 
</div>
    )
}
export default Section3;