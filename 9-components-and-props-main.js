const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        clearCart() {
            this.cart = 0;
        },
    },
    computed: {

    }
})
