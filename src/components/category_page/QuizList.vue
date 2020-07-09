<template lang="html">

    <div class="">
    <v-container v-for="(quiz, index) in quizzes" v-if="quiz.categories == $route.params.name">
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
            fetch("https://quiz-app-server2.herokuapp.com/category/football?fbclid=IwAR0iSsczKju5S7hXEPEYla3Iue3IyvHE0JhghyZ09UnXLQgj9CLwhcblG8Q")
            .then(response => response.json())
            .then(data => this.quizzes = data);
        }
    }
}
</script>

<style lang="css" scoped>

</style>
