import React from "react";
export function HomeBanner() {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 hero-image-row">
        <div className="hero-image-overlay" />
        <video autoPlay loop muted id="vidvid"
          poster="http://www.heritage365.com/wp-content/uploads/2015/01/commercial-real-estate.jpg"
          className="background-video animated fadeIn delay-5s"
          style={{ animationDelay: '.1s', animationDuration: '3s' }}
          preload="true" webkit-playsinline="true"
        >
          <source
            src="https://ak6.picdn.net/shutterstock/videos/19365376/preview/stock-footage-business-real-estate-deal-and-people-concept-man-and-woman-with-house-model-and-pen-signing.webm"
            type="video/webm"
          />
        </video>
        <div className="page-title animated bounceInDown delay-5s" style={{ animationDelay: '.2s' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-image-content">
                <div className="hidden-xs col-sm-12 col-md-12 col-lg-12 header-image-text">
                  <div className="hidden-xs header-text-big">
                    LEADING U.S. INDUSTRIAL REIT
                    </div>
                  <div className="hidden-xs header-text-small">
                    With more than 149 million rentable square feet of
                    high-quality industrial assets in 20 key U.S. logistics
                    markets, we're your reliable source for exceptional
                      warehouse and distribution facilities.{" "}
                    <a href="/">Learn More.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

