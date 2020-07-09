<template lang="html">

    <div class="">
        <v-container v-for="category in categories">
            <quiz-category-panel v-bind:name ="category.name"/>
        </v-container>
    </div>

</template>

<script>
import QuizCategoryPanel from '@/components/QuizCategoryPanel';

export default {
    name: "QuizGrid",
    data () {
        return {
            categories: [],
        }
    },
    created () {
        this.fetchData();
    },
    methods: {
        fetchData () {
            fetch("https://quiz-app-server2.herokuapp.com/category")
            .then(response => response.json())
            .then(data => this.categories = data);
        }
    },
    components: {
        'quiz-category-panel': QuizCategoryPanel
    },
    
}
</script>

<style lang="css" scoped>
</style>
