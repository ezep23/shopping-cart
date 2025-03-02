<script setup>
    import ModalAlert from './ModalAlert.vue';
    import CartDetails from './CartDetails.vue';

    const { cart, isCartActive, renderCart } = //
    const quantity = cart.reduce((count, el) => count + el.quantity, 0)
</script>

<template>
    <div>
        <span class="modal">
            {{ quantity !== 0 ? <ModalAlert value={cantidad}/> : null }}
        </span>
        <button class="cart" @click={{ renderCart }}>Carro</button>
        {{ isCartActive ? <CartDetails cart={cart} /> : null }}
    </div>
</template>

<style scoped>
    .cart{
        background-color: #359A2c;
        color: #fff;
        border: none;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
    }

    .modal{
        position: relative;
        left: 12;
        top: 20;
    }
</style>