import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const FooterSection = () => {
    return (
        <div>
<footer class="footer">
<hr class="text-center footer-line" />
<div class="footer-heading">
  <a href="#home" class="footer-links">
<p class="footer-h1">Status</p>
<p class="footer-h2">Privacy</p>
<p class="footer-h3">Terms</p>
<p class="footer-h4"><span class="material-symbols-outlined footer-icon1">security</span>  Your Privacy Choices</p>
<p class="footer-h5">Cookie Preferences</p>
<p class="footer-h6">Contact Us</p>
<p class="footer-h7"><span class="material-symbols-outlined footer-icon1">public</span> Change Region</p>
</a>
</div>
<div class="footer-left">
<a href="#home" className="footer-links">
  <p class="footer-h8"><span class="material-symbols-outlined footer-icon2">cloud_download</span> Download Slack</p></a>
  <a href="#home" class="footer-icon"><i class="fa-brands fa-twitter icon1"></i></a>
  <a href="#home" class="footer-icon"><i class="fa-brands fa-square-facebook"></i></a>
  <a href="#home" class="footer-icon"><i class="fa-brands fa-youtube"></i></a>
  <a href="#home" class="footer-icon"><i class="fa-brands fa-linkedin"></i></a>
</div>
<div>
  <p  class="footer-text">©2024 Slack Technologies, LLC, a Salesforce company.
     All rights reserved. Various trademarks held by their respective owners.
      Made with ❤️ by <span className="myName">MUHAMMAD DILSHAIR</span></p>
</div>
</footer>

</div>
    )
}
export default FooterSection;


