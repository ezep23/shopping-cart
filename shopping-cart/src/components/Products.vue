<script setup>
  import Product from './Product.vue';

  const { products, addToCart } = defineProps(['products'], ['addToCart']);
</script>

<template>
    <div class="products">
        {{products.map(product => <Product 
            addToCart={addToCart} 
            key={product.name}
            product={product}/>)
        }}
    </div>
</template>

<style scoped>
    .products{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
