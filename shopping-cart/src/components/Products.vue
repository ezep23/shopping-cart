<script setup>
  import Product from './Product.vue';
  import { useCartStore } from '../store/cart';

 const store = useCartStore();
</script>

<template>
    <div class="products">
        <Product 
            v-for="product in store.products"
            :key="product.name"
            :product="product"
            :addToCart="store.addToCart"/>
    </div>
</template>

<style scoped>
    .products{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
