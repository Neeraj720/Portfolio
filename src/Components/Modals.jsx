import React from 'react'

function Modals() {
  return (
   <div>
     <div id="portfolioItem1" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res"  src="public/img/gemini.png" alt=""/>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Google Gemini</h4>
            <p>This project is like ChatGPT where users can enter prompts in an input field to search for anything they want. The responses are generated using the Gemini API. I've used a Context API for state management and also integrated speech recognition functionality. </p>
          </div>
          <div class="modal-footer">
            <a href="https://google-gemini-project.vercel.app/" target='_blank' class="btn btn-fill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem2" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="public/img/google.png" alt=""/>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Google Clone</h4>
            <p>This project is like Google Search where users search for anything they want. The responses are generated using the Google API. I've used a Context API for state management and also integrated speech recognition functionality..</p>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-fill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem3" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="public/img/shopping.png" alt=""/>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Shopping Cart</h4>
            <p>This project includes an add-to-cart feature allowing users to add items to their cart, increase or decrease quantities, and delete items. It also has a search functionality. I've used Redux Toolkit for state management..</p>
          </div>
          <div class="modal-footer">
            <a href="https://shopping-cart-chi-three.vercel.app/" target='_blank' class="btn btn-fill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem4" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="public/img/crud.png" alt=""/>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Crud Application</h4>
            <p>In this project, I've built a CRUD application that allows users to add, delete, view, and update user data. I used Redux Toolkit for state management and local storage for data persistence.</p>
          </div>
          <div class="modal-footer">
            <a href="https://crud-app-seven-mauve.vercel.app/" target='_blank' class="btn btn-fill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem5" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="public/img/travel.png" alt=""/>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Travel Landing Page</h4>
            <p>I created a responsive travel landing page using HTML, CSS, and JavaScript. It adapts to different screen sizes and includes a light/dark theme option.</p>
          </div>
          <div class="modal-footer">
            <a href="https://travel-landing-page-kohl-six.vercel.app/" target='_blank' class="btn btn-fill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem6" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="public/img/weather.png" alt=""/>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Weather App</h4>
            <p>I created a weather app using HTML, CSS, and JavaScript. For data fetching, I utilized an API providing weather-related information.</p>
          </div>
          <div class="modal-footer">
            <a href="https://weather-app-livid-eta-33.vercel.app/" target='_blank' class="btn btn-fill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Modals
