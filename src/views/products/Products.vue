<template>
<div id="products">
    <div class="products position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
        <div class="col-md-10 mx-auto my-5 py-5 blurBack">
            <h1 class="display-4 fw-normal heading">YOO!! HOO!!</h1>
            <p class="lead fw-normal px-5">Shop like you have never before with up to 100% discounts on each and every items.</p>
        </div>
    </div>
    <div class="container productContainer mb-5" v-if="products.length !== 0">
        <h2 class="display-1 my-5 text-center" id="heading">Our Products</h2>
        <div class="d-flex flex-wrap justify-content-center col-12">
            <transition-group appear mode="ease"
                @before-enter="beforeEnter"
                @enter="enter"
            >
                <div v-for="(product, index) in products" :key="product.id" :data-index="index">
                    <router-link :to="{ name: 'ProductDetail', params: {id: product.id}}">
                        <ProductCard :image="product.image" :name="product.title" :price="product.price" :description="product.description" :rating="product.rating" :category="product.category" />
                    </router-link>
                </div>
            </transition-group>
        </div>
    </div>
    <div v-else>
        <h2 class="display-1 my-5 text-center" id="heading">Loading ...</h2>
    </div> 
</div>     
</template>

<script>
import ProductCard from '@/views/products/productCard.vue'
import gsap from 'gsap'

export default {
    components:{ProductCard},
    data() {
        return{
            products: []
        }
    },
    mounted(){
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message))
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

<style>
    .products {
        background: url('../../assets/banner/productBanner.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .products .heading, #heading{
        font-family: 'Libre Baskerville', serif;
        font-weight: bold;
    }
</style>