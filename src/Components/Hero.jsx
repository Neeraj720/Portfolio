import React from 'react'

function Hero() {
  return (
    <div style={{height:'100vh'}}>
      <div id="hero" className="hero">
        <div className="container">
            <div className="row">

                <div className="col-md-6">
                    <h1>Neeraj Singh</h1>
                    <div className="page-scroll">
                        <p className="job-title">Full Stack Developer</p>
                        <a href="#contact" className="btn btn-fill ">Hire me</a>
                        <div className="clearfix visible-xxs"></div>
                        <a href="#portfolio" className="btn btn-border">Explore more</a>
                    </div>
                </div>
            
                <div className="col-md-6 text-right">
                    <img src="public/img/alex-vidal.png" alt="alex-vidal"/>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
