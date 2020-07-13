<template lang="html">

    <div class="">
    <v-container v-for="(quiz, index) in quizzes">
        <quiz-panel :quiz="quiz"/>
    </v-container>
    </div>

</template>

<script>
import QuizPanel from '@/components/category_page/QuizPanel';

export default {
    name: "QuizList",
    data () {
        return {
            quizzes: []
        }
    },
    components: {
        'quiz-panel': QuizPanel
    },
    created () {
        this.fetchData();
    },
    methods: {
        fetchData () {
            var category = this.$route.params.name;
            fetch(`https://quiz-app-server2.herokuapp.com/category/${category}`)
            .then(response => response.json())
            .then(data => this.quizzes = data);
        }
    }
}
</script>

<style lang="css" scoped>

</style>
