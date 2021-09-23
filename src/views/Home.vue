<template>
  <div id="home">
    <div class="home position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
      <div class="col-md-10 mx-auto my-5 py-5 blurBack">
        <h1 class="display-4 fw-normal heading">DUMMY STORE</h1>
        <p class="lead fw-normal px-5">Your dream store where you can buy imaginary product without paying.</p>
        <router-link :to="{name: 'Products'}" class="btn btn-outline-secondary">Shop Now</router-link>
      </div>
    </div>
    <div v-if="products" class="container my-5">
      <h2 class="text-center display-2">Our Categories</h2>
      <div class=" d-flex flex-wrap">
        <transition-group appear mode="ease"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <div v-for="(type, index) in showCategory" :key="type" class="col-12 col-sm-6" :data-index="index">
            <router-link :to="{ name: 'Category', params: {category: type}}">
              <div class="categoryContainer">
                <img :src="require('@/assets/category/'+type.replace(/\s/g, '')+'.jpg')" :alt="type" class="image-fluid categoryImage">
                <h2 v-text="type" class="position-absolute top-50 start-50 translate-middle categoryText"></h2>
              </div>
            </router-link>
          </div>
        </transition-group>
      </div>    
    </div>
    <div v-else>
      <h2 class="display-1 my-5 text-center">Loading ...</h2>
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src
import gsap from 'gsap'


export default {
  name: 'Home',
  components: {   },
  data() {
        return{
            products: [],
            category: []
        }
    },
    mounted(){
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message));
    },
    computed:{
      showCategory(){
        this.products.forEach((item) => {
          if(!this.category.includes(item.category)){
            this.category.push(item.category);
          }
        });
        return this.category;
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(100px)';
      },
      enter(el, done) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          onComplete: done,
          delay: el.dataset.index * 0.2
        })
      }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
  .home {
    background: url('../assets/banner/hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    .heading{
      font-family: 'Libre Baskerville', serif;
      font-weight: bold;
    }
  }
  .blurBack {
    background: rgba(255,255,255,0.5);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    max-width: 700px;
  }
  
  .categoryContainer{
    position: relative;
    min-height: 200px;
    color: #fff;
    cursor: pointer;

    &:hover .categoryImage{
      filter: brightness(50%) blur(2px);
    }

    .categoryImage{
      object-fit: cover;
      width: 100%;
      height: 250px;
      filter: brightness(70%);
      transition: 300ms ease-in-out;
    }
    .categoryText{
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
    }
  }
  
  
</style>