<script>
  export default {
  props: {
    carro: {
      type: Array,
      required: true
    },
    esCarroVisible: {
      type: Boolean,
      required: true
    },
    mostrarCarro: {
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
        <button @click="mostrarCarro">
          {{ esCarroVisible ? 'Ocultar Carro' : 'Mostrar Carro' }}
        </button>
        <div v-if="esCarroVisible">
          <ul>
            <li v-for="producto in productos" :key="producto.name">
              {{ producto.name }} - Cantidad: {{ producto.cantidad }}
            </li>
          </ul>
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