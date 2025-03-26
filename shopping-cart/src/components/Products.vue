<script setup>
  import { computed } from 'vue';
  import Product from './Product.vue';
  import { useCartStore } from '../store/cart';

 const store = useCartStore();
 
const image = computed(() => store.products.img);
</script>

<template>
    <div class="products">
        <Product 
            v-for="product in store.products"
            :key="product.name"
            :product="product"
            :image="image"
            :addToCart="store.addToCart"/>
    </div>
</template>

<style scoped>
    .products{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
        gap: 50px;
    }
</style>
