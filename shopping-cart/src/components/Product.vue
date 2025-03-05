<script setup>
  import { defineProps } from 'vue';
  import { cartStore } from '../store/products';
  import Buttton from '../components/Button.vue';

  const props = defineProps({
    product: {
      type: Object,
      required: true
    },
    addToCart: {
      type: Function,
      required: true
    }
  });

  const store = cartStore();
  const { product, addToCart} = store
</script>

<template>
    <div class="product">
        <img class="img" :alt="product.name" :src="product.img">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <Buttton @click="() => addToCart(product)">
            Agrear al carrito
        </Buttton>
    </div>
</template>

<style scoped>
    .product{
       border: 'solid 1px #eee';
       box-shadow: '0 5px 5px rgb(0,0,0,0.1)';
       width: 30%;
       padding: 10px 15px;
       border-radius: 5px;
    }

    .img{
        width: 100%;
    }
</style>
