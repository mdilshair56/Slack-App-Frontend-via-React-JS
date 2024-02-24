import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section5 = () => {
    return (
<div className="section5 col-lg-12">
<div>
    <h1 class="section-5-heading">Teams large and small rely on Slack</h1>
    <p class="section-5-content">Slack securely scales up to support collaboration at the world’s biggest companies.</p>
     </div>
     <div class="col-md-2 pair-1">
      <img src="Images/emoji/emoji-office-building.png" alt="Office Building" class="emoji-1 emoji1"/>
      <img src="Images/emoji/emoji-skyline.png" alt="Skyline" class="emoji-2 emoji2"/>
     </div>
     
{/* Buttons */}

<div class="section-6-btn text-center">
        <button type="button" class="btn btn-primary section-6-btn1">
          MEET SLACK FOR ENTERPRISE</button>
        <button type="button" class="btn btn-light section-6-btn2">
          TALK TO SALES</button>
     </div>

     <div class="col-md-2 pair-2">
      <img src="Images/emoji/emoji-chart-upward-trend.png" alt="Chart Upawrd Trend" class="emoji-1 emoji1" />
      <img src="Images/emoji/emoji-handshake.png" alt="HandShake" class="emoji-2 emoji2" />
     </div>
     <div class="col-md-2 pair-3">
      <img src="Images/emoji/emoji-lock.png" alt="Lock Emoji" class="emoji-1 emoji1" />
      <img src="Images/emoji/emoji-woman-technologist.png" alt="Woman Technologist Emoji" class="emoji-2 emoji2" />
     </div>
     <div class="stat-number row">
     <ul>
      <div class="stat-number1">
        <span class="number1">85%</span>
        <p class="stat-content1">of users say Slack has improved communication*</p>
      </div>
      <div class="stat-number2">
        <span class="number2">86%</span>
        <p class="stat-content2">feel their ability to work remotely has improved*</p>
      </div>
      <div class="stat-number3">
      <span class="number3">88%</span>
      <p class="stat-content3">feel more connected to their teams*</p>
      </div>
      </ul>
     </div>

</div>
    )
}
export default Section5;