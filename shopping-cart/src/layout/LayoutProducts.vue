<script setup>
    import Title from '../components/Title.vue';
    import Products from '../components/Products.vue';
</script>

<template>
    <div class="layoutProducts">
        <div class="containerProducts">
            <Title />
            <Products />
        </div>
    </div>
</template>

<style scoped>
   .layoutProducts{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        color: #0A283E;
   }

   .containerProducts{
        width: 1200px;
   }
</style>
