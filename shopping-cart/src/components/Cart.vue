<script setup>
  import { computed } from 'vue';
  import ModalAlert from './ModalAlert.vue';
  import CartDetails from './CartDetails.vue';
  import { cartStore } from '../store/products';
  import { storeToRefs } from 'pinia';

  const store = cartStore();
  const { cart, isCartVisible, renderCart } = storeToRefs(store);

  const quantity = computed(() => {
    return cart.value.reduce((count, el) => count + el.quantity, 0);
  });
</script>

<template>
  <div>
    <span class="modal">
      <ModalAlert v-if="quantity !== 0" :value="quantity"/>
    </span>
    <button class="cart" @click="renderCart">Carro</button>
    <CartDetails v-if="isCartVisible" :cart="cart" />
  </div>
</template>

<style scoped>
  .cart {
    background-color: #359A2c;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
  }

  .modal {
    position: relative;
    left: 12px;
    top: 20px;
  }
</style>