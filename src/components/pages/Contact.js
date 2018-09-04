import React from "react";
import Sidebar from '../navigation/Sidebar'
export default function Contact() {
  document.body.classList.add('page-template-default');
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 hero-image-row">
          <div className="hero-image-overlay"></div>
          <img style={{marginTop: -87}} src="../../assets/images/contactUs.jpg" alt="" />
          <div className="page-title">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><h1>Contact Information</h1></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="inner-content" className="container">
        <Sidebar />

        <main id="main" className="col-xs-12 col-sm-12 col-md-9 col-lg-9" role="main" itemScope="" itemProp="mainContentOfPage" itemType="http://schema.org/Blog">
          <article className="entry-content" itemProp="articleBody">

            <section className="row content-section" role="article" itemScope="" itemType="http://schema.org/BlogPosting">
              <div className="row full-width-content-headline-row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h2>Contact us</h2>
                  <p>[Content]</p>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

