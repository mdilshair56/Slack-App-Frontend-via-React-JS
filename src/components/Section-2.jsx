import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section2 = () => {
    return (
<div className="section2 col-lg-12">
<div class="container-text text-center text-s2">
<p class="p-trust">TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
  </div>
  <div class="row trust-logos">
    <ul class="">
    <img src="Images/Logos/airbnb-logo.png" alt="Air Bnb"  class="trust-logo" />
    <img src="Images/Logos/logo-nasa.png" alt="NASA"  class="trust-logo" />
    <img src="Images/Logos/uber.png" alt="Uber"  class="trust-logo" />
    <img src="Images/Logos/target-logo.png" alt="Target"  class="trust-logo" />
    <img src="Images/Logos/nyt.png" alt="NEW YORK TIMES"  class="trust-logo" />
    <img src="Images/Logos/logo-etsy.png" alt="ETsy"  class="trust-logo" />
  </ul>
  </div>
  <div class="row sec2-video">
<div class="video-2 col-md-6">
<video width="620" height="480" controls={false} autoPlay muted className='video2 col-md-7'>
        <source src="/videos/speed.webm" type="video/mp4" />
      </video> 
</div>
<div class="col-md-6 section2-content"> 
  <h1 class="section-2-heading">Move faster with your tools in one place</h1>
   <p class="section-2-content">Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack.</p>
  <a href="#home" className="link1"><p class="section-2-link">Learn more about the Slack platform  <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
  </div>
</div>
</div>
    )
}
export default Section2;