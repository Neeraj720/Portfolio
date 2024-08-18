import React from "react";

function Skils() {
  return (
    <div>
      <section class="site-section section-skills">
        <div class="container">
          <div class="text-center">
            <h3>My Skills</h3>
            <img src="public/img/lines.svg" class="img-lines" alt="lines" />
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="skill">
                <h4>Html/css</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    data-transitiongoal="100"
                  ></div>
                </div>
              </div>
              <div class="skill">
                <h4>Node Js</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    data-transitiongoal="40"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill">
                <h4>Javascript</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    data-transitiongoal="82"
                  ></div>
                </div>
              </div>
              <div class="skill">
                <h4>Mongo DB</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    data-transitiongoal="45"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill">
                <h4>React Js</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    data-transitiongoal="75"
                  ></div>
                </div>
              </div>{" "}
              <div class="skill">
                <h4>Express js</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    data-transitiongoal="45"
                  ></div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skils;
