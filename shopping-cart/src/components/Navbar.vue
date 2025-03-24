<script>
  import Cart from './Cart.vue';
 
  export default {
  name: 'Navbar',
  components: {
    Cart
  },
  props: {
    cart: {
      type: Array,
      required: true
    },
    isCartVisible: {
      type: Boolean,
      required: true
    },
    renderCart: {
      type: Function,
      required: true
    }
  }
} 
</script>

<template>
  <nav>
    <div class="navbar">
      <h1>Carro de Compras</h1>
      <button @click="renderCart">
        {{ isCartVisible ? 'Ocultar Carro' : 'Mostrar Carro' }}
      </button>
      <div v-if="isCartVisible">
        <Cart :cart="cart" :isCartVisible="isCartVisible" :renderCart="renderCart" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
    .navbar{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        justify-content: space-between;
        position: relative;
        padding: 0 50px;
        box-shadow: 0 2px 3px rgb(0,0,0,0.1);
    }
</style>