import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section6 = () => {
    return (
<div className="section6 col-lg-12">
<div class="video-2">
<video  width="620" height="360" controls={false} autoPlay muted className=' video-4'>
        <source src="/videos/IBM_08.mp4" type="video/mp4" />
      </video> 
</div>
  <div class="col-md-6 qoute-content">
  <p class="customer-qoute">“Whether you’re a small or large organization, executing anything from a discrete modernization program to a digital transformation initiative, Slack is an incredibly powerful tool in the hybrid world.”</p>
  <div class="founder-section">
    <p class="founder-name">Jennifer Quinlan</p>
    <p class="founder-content">Managing Partner, IBM iX Americas Leader - Customer and Experience Transformation, IBM</p>
    <a href="#home" className="founderLink"><p class="founder-link">See more customer stories <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
  </div>
</div>
<p class="text-center survey-text">* Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S., UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
</div>
    )
}
export default Section6;