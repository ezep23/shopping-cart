<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
  productos: {
    type: Array,
    required: true
  },
  agregarAlCarro: {
    type: Function,
    required: true
  }
})
</script>

<template>
    <div class="productos">
      <div v-for="producto in productos" :key="producto.name" class="producto">
        <img :alt="producto.name" />
        <h3>{{ producto.name }}</h3>
        <p>${{ producto.price / 100 }}</p>
        <button @click="agregarAlCarro(producto)">Agregar al Carro</button>
      </div>
    </div>
</template>

<style scoped>
    .products{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>