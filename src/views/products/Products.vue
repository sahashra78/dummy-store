<template>
    <div class="products position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
        <div class="col-md-10 mx-auto my-5 py-5 blurBack">
            <h1 class="display-4 fw-normal heading">YOO!! HOO!!</h1>
            <p class="lead fw-normal px-5">Shop like you have never before with up to 100% discounts on each and every items.</p>
        </div>
    </div>
    <div class="container productContainer mb-5" v-if="products.length !== 0">
        <h2 class="display-1 my-5 text-center" id="heading">Our Products</h2>
        <div class="d-flex flex-wrap justify-content-center col-12">
            <div v-for="product in products" :key="product.id">
                <router-link :to="{ name: 'ProductDetail', params: {id: product.id}}">
                    <ProductCard :image="product.image" :name="product.title" :price="product.price" :description="product.description" :rating="product.rating" :category="product.category" />
                </router-link>
            </div>
        </div>
    </div>
  
  
  
</template>

<script>
import ProductCard from '@/views/products/productCard.vue'
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