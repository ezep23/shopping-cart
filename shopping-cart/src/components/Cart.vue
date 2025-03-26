<script>
import ModalAlert from './ModalAlert.vue';
import CartDetails from './CartDetails.vue';

export default {
  name: 'Cart',
  components: {
    ModalAlert,
    CartDetails
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
  },
  computed: {
    quantity() {
      return this.cart.reduce((count, el) => count + el.quantity, 0);
    }
  }
};
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
  background-color: #41b883;
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