<template>
    <div class="backdrop" @click="$emit('decline')">
        <div class="popUp-modal">
            <h4>You have a total of <span class="text-dark">$<span v-text="total.toFixed(2)"></span></span></h4>
            <h5>Are you sure you want to checkout?</h5>
            <div class="mt-4">
                <button class="btn btn-success me-3" @click="$emit('confirm')">Confirm Checkout</button>
                <button class="btn btn-danger" @click="$emit('decline')">Cancel</button>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default{
        props: ["total"]
    }
</script>

<style >
    .popUp-modal{
        max-width: 500px;
        width: 90%;
        padding: 30px 50px;
        margin: 30vh auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .popUp-modal .action button{
        background: #fff;
        color: #272727;
        padding: 5px 10px;
        outline: none;
        border: none;
        border-radius: 5px;
    }
</style>