const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            // image: './assets/images/socks_blue.jpg',
            inStock: false,
            inventory: 9,
            details: ['50% cotton', '30% polyester', '40% rayon', '10% love'],
            variants: [
                { id: 100, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50 },
                { id: 101, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0 },
            ],
            selectedVariantId: 0,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            cart: 0,
            brand: 'Vue Mastery',
        }
    },
    methods : {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        clearCart() {
            this.cart = 0;
        },
        updateVariant(variantId) {
            this.selectedVariantId = variantId
            console.log(variantId)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariantId].image
        },
        inStock() {
            return this.variants[this.selectedVariantId].quantity
        }
    }
})
