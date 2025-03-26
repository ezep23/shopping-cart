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
        <img class="img" :alt="product.name" :src="image">
        <h3>{{ product.name }}</h3>
        <span>{{ product.description }}</span>
        <p>${{ product.price }}</p>
        <button class="button" @click="addToCart(product)">Agregar al carro</button>
    </div>
</template>

<style scoped>
    .product{
       border: solid 1px #eee;
       background-color: #f7f7f7;
       box-shadow: 0 4px 8px rgba(0,0,0,0.1);
       width: 30%;
       padding: 30px 35px;
       border-radius: 5px;
    }

    .img{
      width: 100%;
    }

    .button{
      background-color: #41b883 ;
      color: #fff;
      border: none;
      padding: 15px;
      border-radius: 50px;
      cursor: pointer;
    }
</style>
