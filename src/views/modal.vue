<template>
     <div class="popUp-Modal">
         <h4 class="me-3">Are you sure you want to checkout?</h4>
         <button class="btn btn-success me-3" @click="$emit('confirm')">Yes</button>
         <button class="btn btn-danger" @click="$emit('decline')">No</button>
     </div>
</template>

<style>
.popUp-Modal{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px 50px;
    box-shadow: 1px 1px 5px #a0a0a0;
    border-radius: 10px;
    z-index: 10;
}

</style>