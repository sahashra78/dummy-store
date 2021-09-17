<template>
<div class="container py-5" style="position: relative" v-if="itemsInCart.length">
    <h1 class="text-center mb-5">Shopping cart</h1>
    <div class="cart-wrap">
        <div class="d-flex flex-wrap justify-content-center col-12">
            <div v-for="{ idnum, image, price, quantity, rating, title } in itemsInCart" :key="idnum" class="d-flex flex-wrap cartContainer justify-content-between">
                <div class="col-12 col-md-5 my-4">
                    <div class="d-flex itemInfo">
                        <img :src="image" :alt="title" class="img-fluid item-image">
                        <div>
                            <h5 v-text="title"></h5>
                            $<span v-text="price"></span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 my-4">
                    <div class="d-flex flex-wrap">
                        <div class="d-flex flex-wrap col-12">
                            <div class="col-6">
                                <strong><i class="fas fa-star"></i></strong>&ensp;<span v-text="rating.rate"></span>&emsp;
                                <strong><i class="fas fa-user"></i></strong>&ensp;<span v-text="rating.count"></span>
                            </div>
                            <div class="col-6">
                                <button class="orderQuantity" @click="changeQuantity(idnum, quantity, 'minus')"><i class="fas fa-minus"></i></button>
                                <input class="cartQuantity" type="text" :value="quantity" name="quantity" min="1" disabled>
                                <button class="orderQuantity" @click="changeQuantity(idnum, quantity, 'plus')"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <button class="removeItem position-absolute top-0 end-0" @click="removeFromCart(idnum)"><i class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="d-flex align-items-center bg-dark py-3 px-5 text-light rounded my-5" style="width: fit-content">
        <span class="text-warning fw-bold">Total: $<span v-text="totalPrice"></span></span>
        
            <button class="btn btn-success ms-5" @click="clearCart()">CheckOut</button>
    </div>
</div>



<div v-else class="container py-5">
    <h2>You do not have anything in your shopping cart.</h2>
    <router-link :to="{name: 'Products'}" class="btn btn-outline-secondary">Shop Now</router-link>
    <h3 v-if="showMessage" class="text-center text-success display-2">Thanks for Shopping!!</h3>
</div>
  
   <Modal v-if="showModal" @confirm="removeAllItems()" @decline="showModal=false" />
</template>

<script>

// import axios from 'axios'
import { getItem, useLoadItems, updateItem, deleteItem } from '@/firebase.js'
import ProductCard from '@/views/products/productCard.vue'
import Modal from '@/views/modal.vue'

export default {
    components: { ProductCard, Modal },
    data(){
        return{
            total: 0,
            itemsInCart: '',
            prodId: 0,
            showModal: false,
            showMessage: false
        }
    },
    computed: {
        totalPrice() {
            this.total = 0;
            this.itemsInCart.forEach((item, index) => {
                this.total += parseFloat(item.price)*parseInt(item.quantity);
            });
            return this.total.toFixed(2);
        }        
    },
    mounted() {
    this.itemsInCart = useLoadItems();
    },
    methods: {
        removeFromCart(id){
            deleteItem(id);
        },
        clearCart(){
            this.showModal = true;
        },
        removeAllItems(){
            this.itemsInCart.forEach((item) => {
                deleteItem(item.idnum);
            });
            this.showModal = false;
            this.showMessage = true;
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
        },
        async changeQuantity(id, qty, action){
            const updatedQuantity = 0;
            if(action == "minus" && qty>1) { this.updatedQuantity = qty - 1;  }
            if(action == "plus") { this.updatedQuantity = qty + 1;  }
            const item = await getItem(id);
            item.quantity = this.updatedQuantity;
            await updateItem(id, { ...item });
        }
    }

}
</script>

<style lang="scss">
$quantitySize: 20px;

    .checkoutContainer{
        position: relative;
        height: 200px;
    }

    .cart-wrap{
        padding: 10px;
        margin: 10px auto;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
        border-radius: 10px;

        .cartContainer{
            position: relative;
            width: 100%;
            border-top: 2px solid #eae9e8;
            &:nth-child(1){
                border-top: none;
            }

            .item-image{
                max-width: 70px;
                width: 100%;
                align-self: center;
                margin-right: 5px;
            }
            .itemInfo{
                flex-wrap: nowrap;
                grid-gap: 10px;
            }

            .orderQuantity, .removeItem{
                border: none;
                background: none;
                color: #a1a1a1;
                padding: 5px 10px;
                margin: 0;
                font-size: 15px;
                cursor: pointer;
                &:hover{
                    color: #272727;
                }
            }

            .cartQuantity {
                width: 50px;
                margin: auto 5px;
                text-align: center;
                border: none;
                font-size: $quantitySize;
                line-height: $quantitySize;
                background: none;
            }
        }
    }
</style>