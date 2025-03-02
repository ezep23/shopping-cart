<script setup>
  import Logo from './Logo.vue';
  import Cart from './Cart.vue';

  const { cart, isCartActive, renderCart } = //
</script>

<template>
    <nav class="navbar">
        <Logo />
        <Cart 
            cart={{ cart }} 
            isCartActive={{ isCartActive }}
            renderCart={{ renderCart }}
        />
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
