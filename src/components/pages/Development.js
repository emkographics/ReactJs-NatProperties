import React from "react";
import Sidebar from '../navigation/Sidebar'
export default function Development() {
  document.body.classList.add('page-template-default');
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 hero-image-row">
          <div className="hero-image-overlay"></div>
          <img src="https://www.dukerealty.com/wp-content/uploads/2016/03/who-we-are.jpg" alt="" />
          <div className="page-title">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><h1>Property Development</h1></div>
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
                  <h2>What are you developing next?</h2>
                  <p>NAT Properties is a leader in commercial real estate. Since our founding in 1972, we have set the standard for providing high-quality, productivity-enhancing industrial properties, and today own and manage best-in-class warehouse/distribution facilities in 20 major U.S. logistics markets nationwide. Our expertise also includes development, property management, and leasing services. A <a href="/who-we-are/awards/industry-awards/">trusted provider</a>&nbsp;of real estate solutions, NAT Properties is <strong><a href="http://investor.dukerealty.com/phoenix.zhtml?c=60691&amp;p=irol-irhome" target="_blank" rel="noopener noreferrer">publicly traded</a>&nbsp;</strong>on the New York Stock Exchange (NYSE: DRE) and is a member of the S&amp;P 500.</p>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

