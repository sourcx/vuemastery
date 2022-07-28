app.component('product-display', {
    props: {
        premium : {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image go1 here -->
        <!-- bind attribute to an expression -->
        <!-- ternary operators for settings classes -->
        <img
          v-bind:src="image"
          :class="[ inStock ? '' : 'out-of-stock-img' ]"
        />
        <!-- you can also just do this without typing v-bind -->
        <!-- <img :src="image" /> -->
      </div>
      <div class="product-info">
        <!-- <h1>{{ product }}</h1> -->
        <!-- computer property for title -->
        <h1>{{ title }}</h1>
        <p>I love {{ description }} </p>
        <p>Shipping: {{ shipping }}</p>

        <p v-if="inStock">In stock</p>
        <!-- A v-else element must immediately follow a v-if or a v-else-if element
        - otherwise it will not be recognized. -->
        <p v-else>Out of stock</p>

        <!-- <button @click="inStock = !inStock">toggle inStock</button> -->

        <!-- it's also possible to use v-show, more performant if it has to toggle-->
        <p v-show="inStock">In stock (using v-show)</p>

        <!-- lists using v-for -->
        <p>Made out of</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <p>Variants</p>

        <!-- I think css bindings translate backgroundColor to background-color -->
        <!-- using 'background-color' also works-->
        <div
          v-for="(variant, index) in variants"
          v-bind:key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"></div>

        <p></p>
            <!-- I am not seeing this key in the HTML so I'm unsure what happens underwater -->
        <!-- The key special attribute is primarily used as a hint for Vue's virtual DOM algorithm
             to identify vnodes when diffing the new list of nodes against the old list. -->

        <p>
          Sizes:
          <span v-for="size in sizes">{{ size }}&nbsp;</span>
        </p>

        <!-- <button v-on:click="addToCart" class="button">Add to cart</button> -->
        <!-- the @click is the v-on: shorthand-->
        <!-- Use the "{ }" syntax for setting the class binding.
             disabledButton is the class name,
             !inStock is the expression to evaluate -->
        <button
          @click="addToCart"
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock">
          Add to cart
        </button>

        <review-list :reviews="reviews" v-show="reviews.length > 0"></review-list>
        <review-form @review-submitted="addReview"></review-form>
      </div>
    </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            details: ['50% cotton', '30% polyester', '40% rayon', '10% love'],
            variants: [
                { id: 100, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50 },
                { id: 101, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0 },
            ],
            selectedVariantId: 0,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            brand: 'Vue Mastery',
            reviews: [],
        }
    },
    methods: {
        updateVariant(variantId) {
            this.selectedVariantId = variantId
            console.log(variantId)
        },
        // using events to send data from inside a component to outside
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariantId].id)
        },
        addReview(review) {
            this.reviews.push(review)
        },
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
        },
        shipping() {
            return this.premium ? 'Free' : '$5.00'
        },
    }
})
