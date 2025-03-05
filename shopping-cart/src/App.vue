<script setup>
  import { reactive } from 'vue'
  import Navbar from './components/Navbar.vue'
  import Layout from './components/Layout.vue'
  import Title from './components/Title.vue'
  import Productos from './components/Productos.vue'

  const state = reactive({
    productos: [
      [
        { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
        { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
        { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
      ]
    ],
    carro: [],
    esCarroVisible: false
  }) 

  const agregarAlCarro = (producto) => {
    const { carro } = state
      if(carro.find(item => item.name === producto.name)){
        const newCarro = carro.map(item => item.name === producto.name
        ? ({ ...item, cantidad: item.cantidad + 1 })
        : item)
        return state.carro.push({carro: newCarro})
      }
      return state.carro.push({ carro: state.carro.concat({ ...producto, cantidad: 1 }) })
  }

  const mostrarCarro = () => {
    if(state.carro.length){
      return 
    }
    state.esCarroVisible = !state.esCarroVisible
    
  }
</script>

<template>
  <div>
    <Navbar 
      :carro="state.carro" 
      :esCarroVisible="state.esCarroVisible" 
      :mostrarCarro="mostrarCarro"/>
    <Layout>
      <Title />
      <Productos 
        :agregarAlCarro="agregarAlCarro"
        :productos="state.productos"
      />
    </Layout>
  </div>
</template>

<style scoped>
  *{
    color: #000;
  }
</style>