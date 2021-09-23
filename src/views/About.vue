<template>
  <div class="about container my-5">
    <h1 class="text-center mb-5 display-2">About Us</h1>
    <div class="d-flex flex-wrap">
      <div class="col-12 col-md-5 text-center">
        <div class="imageContainer me-3">
          <img src="@/assets/Sahashra.png" alt="about" class="overlayFrontImage">
          <i class="fas fa-play overlayBackImage"></i>
        </div>        
      </div>
      <div class="col-12 col-md-7 py-3">
        <p>
          Dummy Store is a web application build using Vue 3 by Sahashra Rajbhandari. 
          For storing the data, firebase is being used.
          For styling the pages, bootstrap 5.1 is used in most part of the application. 
          And for custom stylings, custom CSS and SCSS is written.
          Separate multiple component and views are created which makes this a single page application.
        </p>
        <p>
          This application uses an external api called "Fake Store API" to get the information about different products.
          fakeStoreApi is a free online REST API that you can use whenever you need Pseudo-real data for your e-commerce 
          or shopping website without running any server-side code. It's awesome for teaching purposes, sample codes, tests, etc.
        </p>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
  .about {
    h1{
      font-weight: 400;
    }
    p{
    color: #636E72;
    font-size: 20px;
    }
    .imageContainer{
      position: relative;
      border-radius: 10px;
      width: fit-content;
      box-shadow: 1px 3px 10px #a0a0a0;
      overflow: hidden;

      .overlayFrontImage{
        z-index: 5;
        border-radius: 10px;
        width: 100%;
        height: auto;
        text-shadow: 1px 1px 10px #000;
      }
      .overlayBackImage{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-10deg);
        font-size: 30em;
        color: #122633;
        z-index: -1;
        animation-name: spin;
        animation-iteration-count: infinite;
        animation-duration: 100s;
        animation-fill-mode:forwards;
        animation-direction: normal;
        animation-timing-function: linear;
      }
      
    }
  } 
  @keyframes spin{
    0%{
      transform: translate(-50%, -50%) rotate(-10deg);
    }
    100%{
      transform: translate(-50%, -50%) rotate(350deg);
    }
  }
</style>