<script setup>
    import { cartStore } from '../store/products';
    const store = cartStore();
    const { cart } = store;
</script>

<template>
    <div class="details">
        <ul class="ul"> 
            <li v-for="product in cart" :key="product.name" class="product">
                <img :alt="product.name" :src="product.img" width="50" height="32">
                {{ product.name }} <span>{{ product.cantidad }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
   .details{
    background-color: #fff;
    position: absolute;
    margin-top: 30;
    box-shadow: 1px 5px 5px rgb(0,0,0,0.3);
    border-radius: 5px;
    width: 300px;
    right: 50;
   }

   .ul{
    margin: 0;
    padding: 0;
   }

   .product{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    border-bottom: solid 1px #aaa;
   }
</style>
