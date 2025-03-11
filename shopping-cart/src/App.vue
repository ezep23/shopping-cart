<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Layout from './components/Layout.vue';
import Title from './components/Title.vue';
import Products from './components/Products.vue';
import { useCartStore } from './store/cart.js';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Layout,
    Title,
    Products
  },
  setup() {
    const cart = useCartStore();
    const { state, addToCart, renderCart } = cart;

    return {
      state,
      addToCart,
      renderCart
    };
  }
});
</script>

<template>
  <div>
    <Navbar :cart="state.cart" :isCartVisible="state.isCartVisible" :renderCart="renderCart()" />
    <Layout>
      <Title shopName="Tienda" />
      <Products :addToCart="addToCart" :products="state.products" />
    </Layout>
  </div>
</template>

<style scoped>
* {
  color: #000;
}
</style>