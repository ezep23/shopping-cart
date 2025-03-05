<script setup>
  import { cartStore } from '../store/products';
  import Product from './Product.vue';

  const store = cartStore();
  const { products, addToCart } = store;
</script>

<template>
    <div class="products">
        <Product 
            v-for="product in products"
            :key="product.name"
            :product="product"
            :addToCart="addToCart"
        />
    </div>
</template>

<style scoped>
    .products{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
