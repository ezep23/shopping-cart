<script> 
  export default{
    name: 'Title',
    props:{
      ShopName: String
    }
  }
</script>

<template>
  <h1>{{ ShopName }}</h1>
</template>

<style scoped>
    h1{
        margin-bottom: 20px;
    }
</style>