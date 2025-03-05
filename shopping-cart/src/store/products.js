import { defineStore } from 'pinia';

export const cartStore = defineStore('cartStore', {
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
      const cart = this.cart;
      const finded = cart.find(x => x.name === product.name);
      
      if (finded) {
        const newCart = cart.map(x =>
          x.name === product.name
            ? { ...x, quantity: x.quantity + 1 }
            : x
        );
        this.cart = newCart;
      } else {
        this.cart = [...this.cart, { ...product, quantity: 1 }];
      }
    },
    renderCart() {
      if (this.cart.length > 0) {
        this.isCartVisible = !this.isCartVisible;
      }
    },
  },
});
