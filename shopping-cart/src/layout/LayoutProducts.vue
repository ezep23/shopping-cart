<script setup>
    import Title from '../components/Title.vue';
    import Products from '../components/Products.vue';
    import Navbar from '../components/Navbar.vue';
</script>

<template>
    <div>
    <Navbar />
    <Layout>
      <Title />
      <Products />
    </Layout>
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
