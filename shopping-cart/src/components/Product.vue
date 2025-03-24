<script>
  export default{
    name: "Product",
    props: {
      product: {
        type: Object,
        required: true,
      },
      addToCart: {
      type: Function,
      required: true,
      },
    },
  }
</script>

<template>
    <div class="product">
        <img class="img" :alt="product.name" :src="product.img">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)">Agregar al carro</button>
    </div>
</template>

<style scoped>
    .product{
       border: solid 1px #eee;
       box-shadow: 0 5px 5px rgba(0,0,0,0.1);
       width: 30%;
       padding: 10px 15px;
       border-radius: 5px;
    }

    .img{
      width: 100%;
    }
</style>
