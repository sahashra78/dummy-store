<template>
    <div v-if="product">    
      <!-- product info -->
      <section class="section py-5">
        <div class="container py-5">
          <div class="d-flex flex-wrap justify-content-center align-items-center">
            <div class="col-12 col-sm-6 col-md-5 col-lg-3 text-left">
              <h2 v-text="product.title"></h2>
              <p v-text="product.description"></p>
            </div>
            <div class="col-12 col-sm-6 col-md-7 col-lg-6 text-center">
              <img
                  :src="product.image"
                  :alt="product.title"
                  class="px-5 image-fluid productDetailImage"
                  />
            </div>
            <div class="col-12 col-md-12 col-lg-3">
              <h5 class="mb-4">$<span v-text="product.price"></span></h5>
              <p class="mb-4">Category: <span v-text="product.category"></span></p>
              <p class="mb-4">
                <i class="fas fa-star"></i>
                &ensp;<span v-text="product.rating.rate"></span>
                &emsp;<i class="fas fa-user"></i>
                &ensp;<span v-text="product.rating.count"></span>
              </p>
              <div>
                <div class="d-flex">
                  <button class="btn btn-primary" @click="quantity>1 ? quantity-- : null"><i class="fas fa-minus"></i></button>
                  <input class="quantity" type="text" v-model="quantity" name="quantity" min="1">
                  <button class="btn btn-primary" @click="quantity++"><i class="fas fa-plus"></i></button>
                </div>
                  <button class="btn btn-primary my-3" @click.prevent="addToCart()">Add to Cart</button>
                  <span class="px-3" :class="messageStyle" v-text="message"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import { addItem, useLoadItems } from '@/firebase.js'
export default {
    props: ['id'],
    data() {
        return{
            product: null,
            cartItem: null,
            cart: [],
            isAdded: false,
            isPresent: false,
            itemsInCart: '',
            quantity: 0,
            message:'',
            messageStyle: ''
        }
    },
    mounted(){
        fetch('https://fakestoreapi.com/products/' + this.id)
        .then(response => response.json())
        .then(data => this.product = data)
        .catch(err => console.log(err.message));

        this.getItems();
    },
    methods: {
      getItems(){
        this.itemsInCart = useLoadItems();
      },
      resetMessage(){
        setTimeout(() => {
          this.messageStyle = ''
          this.message = ''
          this.isPresent = false;
        }, 1500);
      },
      async addToCart() {
        if(this.quantity){
          this.itemsInCart.forEach((item) => {
            if(parseInt(item.id) === parseInt(this.id)){
                this.isPresent = true;
                this.messageStyle = 'text-danger'
                this.message = "Item already exists in the cart."
            }
          });
          if(!this.isPresent){
            this.messageStyle = 'text-success'
            this.message = 'Added to cart'
            this.cartItem = this.product;
            this.cartItem["quantity"] = this.quantity;
            await addItem({ ...this.cartItem })
          }
          else{
            this.resetMessage();
          }
        }
        else{
          this.messageStyle = 'text-danger'
          this.message = "Please select a proper quantity."
          this.resetMessage();
        }
        

        // this.cart.forEach((item, index) => {
        //   if(item.name.product.id === this.product.id){
        //     this.isPresent = true;
        //   }
        // });
  //       if(!this.isPresent){
  //         this.cartItem = {"product": [...this.product, "quantity"= 1]}
  //         // const res = await axios.post('http://localhost:3000/items', { name: this.cartItem});

  // console.log(this.cartItem);
  //         // this.cart = [...this.cart, res.data];
  //         // this.cartItem = null;
  //         this.isAdded = true;
  //       }
  //       setTimeout(() => {
  //         this.isAdded = false;
  //         this.isPresent = false;
  //       }, 1500);
      }
    }
}
</script>

<style lang="scss">
  $quantitySize: 30px;

    .productDetailImage{
      max-width: 500px;
      width: 100%;
      height: auto;
    }
    input.quantity{
      width: 50px;
      margin: auto 5px;
      text-align: center;
      border: none;
      font-size: $quantitySize;
      line-height: $quantitySize;
    }
</style>