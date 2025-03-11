<script>
export default {
  name: 'Layout'
}
</script>

<template>
  <div class="layout">
    <div class="container">
      <slot />

    </div>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #0A283E;
  }

  .container{
    width: '1200px';
  }
</style>