import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [
      { name: 'Tomate', description: 'verdura para cocinar', price: 1500, img: '../../assets/tomate.jpg' },
      { name: 'Arbejas', description: 'legumbre para cocinar', price: 2500, img: './../assets/arbejas.jpg' },
      { name: 'Lechuga', description: 'verdura para cocinar', price: 500, img: '../assets/lechuga.jpg' },
    ],
    cart: [],
    isCartVisible: true,
  }),
  actions: {
    addToCart(product) {
      const finded = this.cart.find((item) => item.name === product.name);
      
      if (finded) {
        this.cart = this.cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    renderCart() {
      if (this.cart.length > 0) {
        this.isCartVisible = !this.isCartVisible;
      }
    },
  },
});