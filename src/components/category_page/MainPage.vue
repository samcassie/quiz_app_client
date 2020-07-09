<template lang="html">

    <div class="">

        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <quiz-list />

    </div>

</template>

    <script>

    import QuizList from '@/components/category_page/QuizList';

    export default {
        name: 'home_main_page',
        props: [
            'name'
        ],
        components: {
            'quiz-list': QuizList
        },
        data () {
            return {
                loading: false,
                post: null,
                error: null
            }
        },
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.error = this.post = null
                this.loading = true
                // replace `getPost` with your data fetching util / API wrapper
                getPost(this.$route.params.id, (err, post) => {
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.post = post
                    }
                })
            }
        }
    }
    </script>

    <style lang="css" scoped>
    </style>
