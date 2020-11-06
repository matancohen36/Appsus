
export default {
    template: `
        <form class="review-form" @submit.prevent="addReview">
            <label>Full Name: <input type="text" ref="fullName" v-model="fullName"></label>
            <div class="rating">
                <label v-for="rating in ratings" class="fa fa-star" v-bind:class="{checked: rating <= value}">
                    <input type="radio" v-bind:value="rating" v-model="value" hidden /></label>
            </div>
            <label>Read at: <input type="date" v-bind:value="currDate" /></label>
            <br>
            <textarea cols="30" rows="10"></textarea>
        </form>
    `,
    data() {
        return {
            fullName: 'Books Reader',
            ratings: [1,2,3,4,5],
            value: 3,
            currDate: null
        };
    },
    methods: {
        logEvent($event) {
            console.log($event)
        }
    },
    computed: {
    },
    mounted() {
        this.$refs.fullName.focus();
    },
    created() {
        this.currDate = new Date().toISOString().split('T')[0]
    }
};