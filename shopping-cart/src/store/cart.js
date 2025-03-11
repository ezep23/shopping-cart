import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    cart: [],
    isCartVisible: false,
  }),
  actions: {
    addToCart(product) {
      const cart = state.cart;
      const finded = cart.find(x => x.name === product.name);
      
      if (finded) {
        const newCart = cart.map(x =>
          x.name === product.name
            ? { ...x, quantity: x.quantity + 1 }
            : x
        );
        state.cart = newCart;
      } else {
        state.cart = [...state.cart, { ...product, quantity: 1 }];
      }
    },
    renderCart() {
      if (state.cart.length > 0) {
        state.isCartVisible = !state.isCartVisible;
      }
    },
  },
});