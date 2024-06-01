import React from 'react';


const MainBanner = () => {
  return (
    <div className="main-banner" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption header-text">
              <h6>WORLD OF PROGRAMING</h6>
              <div className="line-dec"></div>
              <h4>
                WATCH <em>LEARN</em> PRACTICE <span>With IDIN CODE</span>
              </h4>
              <div className="main-button scroll-to-section">
                <a href="#services">Discover More</a>
              </div>
              <span>or</span>
              <div className="second-button">
                <a href="faqs.html">Check our FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
