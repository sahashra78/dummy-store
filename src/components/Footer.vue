<template>
<!--  FOOTER START -->  
<div class="footer">
  <div class="inner-footer">
<!--  for company name and description -->
    <div class="footer-items">  
        <router-link to="/" class="navbar-brand"><img alt="brand logo" src="@/assets/logo.png" class="footerLogo"></router-link>    
    </div>    
<!--  for company name and description -->
    <div class="footer-items">
      <h1>Dummy Store</h1>
      <p>This Web app is made using Vue JS. All the products data used in this web app is fetched from Fake Store API. Visit our About page to learn more about us.</p>
    </div>    
<!--  for quick links  -->
    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> <!--for the underline -->
        <ul>
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Products'}" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'About'}" class="nav-link">About</router-link>
            </li>
        </ul>
    </div>
<!--  for contact us info -->
    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>Dummy Street, Store</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>(905) 814-7236</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>support@dummystore.com</li>
        </ul>       
<!--   for social links -->
        <div class="social-media">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  
<!--   Footer Bottom start  -->
  <div class="footer-bottom">
    Copyright &copy; Sahashra Rajbhandari {{date}}.
  </div>
</div>  
<!--   Footer Bottom end -->
  
<!--   FOOTER END -->
</template>

<script>
export default {
data(){
    return{
        date: new Date().getFullYear()
    }
}
}
</script>

<style lang="scss" scoped>
    @import '@/static/Footer.scss';

    .footer a {
        color: #eae9e8;
    }

    .footer a.router-link-exact-active {
        color: #fff;
        font-weight: bold;
    }
</style>