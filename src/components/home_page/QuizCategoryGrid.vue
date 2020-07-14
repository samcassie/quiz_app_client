<template lang="html">

    <div class="">
        <v-container class="categoryContainer">
            <v-row>
            <v-col cols="8">
                <h1 class="topLists topCategory pb-3 white--text" >Our top categories:</h1>
                <div v-for="category in categories">
                    <quiz-category-panel :category="category"/>
                </div>
            </v-col>
            <v-col cols="4">
                <h1 class="topLists pb-3 white--text" >Top 10 quizzes:</h1>
                <top-quizzes :topQuizzes="topQuizzes"/>
            </v-col>
        </v-row>
        </v-container>

    </div>

</template>

<script>
import QuizCategoryPanel from '@/components/home_page/QuizCategoryPanel';
import TopQuizzes from '@/components/home_page/TopQuizzes';


export default {
    name: "QuizGrid",
    data () {
        return {
            categories: [],
            topQuizzes: []
        }
    },
    created () {
        this.fetchCategories();
        this.fetchTopQuizzes();
    },
    methods: {
        fetchCategories () {
            fetch("https://quiz-app-server2.herokuapp.com/category")
            .then(response => response.json())
            .then(data => this.categories = data);
        },
        fetchTopQuizzes () {
            fetch("https://quiz-app-server2.herokuapp.com/quiz?orderBy=desc&amount=10&fbclid=IwAR3kFeWcrOsYWPXNR9EX8uh6dEPsmaFudYgE89oKCEZVC_WJYpKlkGdmmbQ")
            .then(response => response.json())
            .then(data => this.topQuizzes = data);
        }
    },
    components: {
        'quiz-category-panel': QuizCategoryPanel,
        'top-quizzes': TopQuizzes
    },

}
</script>

<style lang="css" scoped>

    .topLists{
        font-size: 1.5em !important;
    }

    .categoryContainer{
        border: 0.80em solid #fcfcfc;
        padding-left: 3em;
        background-color: #0C4A60;
        width: 100% !;
    }

</style>
