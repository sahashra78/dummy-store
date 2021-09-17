<template>
  <div class="wrapper productCard">
  <div class="container">
    <div class="top">
      <img :src="image" :alt="name">
    </div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h6 v-text="name" class="productName"></h6>
          <p>$<span v-text="price"></span></p>
        </div>
      </div>
    </div>
  </div>
  <div class="inside">
    <div class="icon"><i class="material-icons">info_outline</i></div>
    <div class="contents">
      <p class="mb-4">
        <i class="fas fa-star"></i>
        &ensp;<span v-text="rating.rate"></span>
        &emsp;<i class="fas fa-user"></i>
        &ensp;<span v-text="rating.count"></span>
      </p>
      <p>Category: <span v-text="category"></span></p>
      <span v-text="description"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['image', 'name', 'price', 'description', 'rating', 'category']
}
</script>

<style lang="scss">
  @import '@/static/productCard.scss'; 

</style>