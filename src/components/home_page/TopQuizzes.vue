<template>


    <v-row dense>
        <v-col cols="12">
            <v-card class="border-card">
                <div v-for="(quiz, index) in topQuizzes">
                    <h3 class="topQuizList black--text">
                    <span class="quizTitle">{{index + 1}} : {{quiz.name}}</span>
                    <br>
                    Total hits: {{quiz.hitCount}}</h3>
                    <br>
                </div>
            </v-card>
        </v-col>
    </v-row>


</template>

<script>
export default {
    data () {
        return {}
    },
    props: ['topQuizzes']
}
</script>

<style lang="css" scoped>

    .topQuizList{
        font-size: 0.9em;
    }

    .quizTitle{
        text-decoration: underline;
    }

    .border-card {
        background-color: #fcfcfc;
        border: 2px solid black !important;
        padding: 1em;
        margin-right: 1.85em;
    }

</style>
