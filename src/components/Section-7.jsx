import React from "react";
import "../styles/styles.css"
import "../styles/responsiveness.css"

const Section7 = () => {
    return (
<div className="section7 col-lg-12">
<div>
    
<section class="col-lg-12 section-7">
<div class="text-center">
<h2 class="section-7-heading">Take a deeper dive into a new way to work</h2>
</div>
<div class="container">

   {/* <!-- Cards     Card-1 --> */}

   <div class="container">
    <section class="mx-auto">
      <div class="card col-sm-3 card1">
        <div class="bg-image">
          <img src="Images/cards/promo-card-dreamforce-2023.png" class="img-fluid img-1" alt="Card-img" />
          <a href="#home">
            <div class="mask"></div>
          </a>
        </div>
        <div class="card-body">
          <p class="sub-title">Event</p>
          <h3 class="card-title">Ready for the future of AI in Slack?</h3>
          <a href="#home" className="link"><p class="card1-link">WATCH ON-DEMAND  <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
        </div>
      </div>
    </section>
  </div>

  {/* <!-- Card-2 --> */}

  <div class="container">
    <section class="mx-auto">
      <div class="card col-sm-3 card2">
        <div class="bg-image">
          <img src="Images/cards/wtny-resource-tile.jpg" class="img-fluid img-1" alt="Card-img"  />
          <a href="#home">
            <div class="mask" ></div>
          </a>
        </div>
        <div class="card-body">
          <p class="sub-title">On-demand</p>
          <h3 class="card-title">Big things are launching. Relieve the highlights of World Tour New York!</h3>
          <a href="#home" className="link" ><p class="card2-link">WATCH NOW  <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
        </div>
      </div>
    </section>
  </div>

  {/* <!-- Card-3 --> */}

  <div class="container">
    <section class="mx-auto">
      <div class="card col-sm-3 card3">
        <div class="bg-image">
          <img src="Images/cards/promo-open-ai.jpg" class="img-fluid img-1" alt="Card-img"  />
          <a href="#home">
            <div class="mask"></div>
          </a>
        </div>
        <div class="card-body">
          <p class="sub-title">Customer Story</p>
          <h3 class="card-title">How OpenAI expands ChatGPT with Slack.</h3>
          <a href="#home" className="link"><p class="card3-link">READ MORE  <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
        </div>
      </div>
    </section>
  </div>

{/* <!-- Card-4 --> */}

<div class="container">
  <section class="mx-auto">
    <div class="card col-sm-3 card4">
      <div class="bg-image">
        <img src="Images/cards/promo-boost-productivity.jpg" class="img-fluid img-1" alt="Card-img"  />
        <a href="#home">
          <div class="mask"></div>
        </a>
      </div>
      <div class="card-body">
        <p class="sub-title">Webinar</p>
        <h3 class="card-title">Top Slack tips to boost productivity</h3>
        <a href="#home" className="link"><p class="card4-link">WATCH NOW  <span class="material-symbols-outlined arrow">arrow_forward</span></p></a>
      </div>
    </div>
  </section>
</div>
</div>
</section>

     </div>
</div>
    )
}
export default Section7;