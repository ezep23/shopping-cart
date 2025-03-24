<script setup>
import Navbar from './components/Navbar.vue';
import Layout from './components/Layout.vue';
import TitleComp from './components/TitleComponent.vue';
import Products from './components/Products.vue';
import { useCartStore } from './store/cart.js';

const store = useCartStore();

</script>

<template>
  <div>
    <div>
      <Navbar :cart="store.cart" :isCartVisible="store.isCartVisible" :renderCart="store.renderCart"/>
      <Layout>
        <TitleComp />
        <Products />
      </Layout>
    </div>
  </div>
</template>

<style scoped>
* {
  color: #000;
}
</style>