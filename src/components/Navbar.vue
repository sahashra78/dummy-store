<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand"><img alt="brand logo" src="@/assets/logo.png" class="brandLogo"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Products'}" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'About'}" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Cart'}" class="nav-link">Cart</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    
}
</script>

<style>
#nav {
  padding: 0 20px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #122633;
  font-weight: bold;
}
#nav .brandLogo{
  width: 90px;
  height: auto;
}
</style>