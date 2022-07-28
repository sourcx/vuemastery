app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name"> <!-- binds input to data -->

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea> <!-- binds input to data -->

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating"> <!-- binds input to data -->
     <!-- .number typecast naar een nummer  -->
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <!-- solution -->
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    <!-- solution -->

    <input class="button" type="submit" value="Submit">

    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
                alert('Please fill in all fields')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            // send the review out to the parent component
            this.$emit('review-submitted', productReview) // productReview is payload

            this.name = '',
            this.review = '',
            this.rating = null,
            this.recommend = null
        }
    }
})
