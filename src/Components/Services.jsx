import React from 'react'

function Services() {
  return (
    <div>
       <section id="service" class="site-section section-services overlay text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>What i do</h3>
                        <img src="/img/lines.svg" class="img-lines" alt="lines"/>
                    </div>
                    <div class="col-sm-6">
                        <div class="service">
                            <img src="/img/front-end.svg" alt="Front End Developer"/>
                            <h4>Front-end</h4>
                            <p>As a javascript developer, I have experience in HTML5 and CSS3 techniques working with advanced javascript Library such as React</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="service">
                            <img src="/img/back-end.svg" alt="Back End Developer"/>
                            <h4>Back-end</h4>
                            <p> back-end development, I have foundational experience with Node.js and Express.js, which allows me to build server-side applications and RESTful APIs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services
