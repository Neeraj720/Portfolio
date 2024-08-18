import React from "react";

function Work() {
  return (
    <section id="portfolio" className="site-section section-portfolio">
      <div className="container">
        <div className="text-center">
          <h3>My recent Works</h3>
          <img src="/img/lines.svg" className="img-lines" alt="lines" />
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img src="/img/gemini.png" className="img-res" alt="" />
              <div className="portfolio-item-info">
                <h4>Google Gemini</h4>
                <a
                  data-toggle="modal" data-target="#portfolioItem1"
                >
                  <span className="glyphicon glyphicon-eye-open"></span>
                </a>
                <a
                 href="https://github.com/Neeraj720/Google-Gemini-Project"
                 target="_blank" 
                >
                  <span className="glyphicon glyphicon-link"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="/img/google.png"
                className="img-res"
                alt=""
              />
              <div className="portfolio-item-info">
                <h4>Google Clone</h4>
                <a href="#" data-toggle="modal" data-target="#portfolioItem2">
                  <span className="glyphicon glyphicon-eye-open"></span>
                </a>
                <a href="https://github.com/Neeraj720/Google-Cloan" target="_blank">
                  <span className="glyphicon glyphicon-link"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="/img/shopping.png"
                className="img-res"
                alt=""
              />
              <div className="portfolio-item-info">
                <h4>Shopping Cart</h4>
                <a href="#" data-toggle="modal" data-target="#portfolioItem3">
                  <span className="glyphicon glyphicon-eye-open"></span>
                </a>
                <a href="https://github.com/Neeraj720/Shopping-Cart" target="_blank" >
                  <span className="glyphicon glyphicon-link"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="/img/crud.png"
                className="img-res"
                alt=""
              />
              <div className="portfolio-item-info">
                <h4>Crud Application</h4>
                <a href="#" data-toggle="modal" data-target="#portfolioItem4">
                  <span className="glyphicon glyphicon-eye-open"></span>
                </a>
                <a href="https://github.com/Neeraj720/Crud-app"  target="_blank">
                  <span className="glyphicon glyphicon-link"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="/img/travel.png"
                className="img-res"
                alt=""
              />
              <div className="portfolio-item-info">
                <h4>Travel Landing Page</h4>
                <a href="#" data-toggle="modal" data-target="#portfolioItem5">
                  <span className="glyphicon glyphicon-eye-open"></span>
                </a>
                <a href="https://github.com/Neeraj720/Travel-Landing-Page" target="_blank">
                  <span className="glyphicon glyphicon-link"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="/img/weather.png"
                className="img-res"
                alt=""
              />
              <div className="portfolio-item-info">
                <h4>Weather App</h4>
                <a href="#" data-toggle="modal" data-target="#portfolioItem6">
                  <span className="glyphicon glyphicon-eye-open"></span>
                </a>
                <a href="https://github.com/Neeraj720/Weather-App" target="_blank">
                  <span className="glyphicon glyphicon-link"></span>
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
