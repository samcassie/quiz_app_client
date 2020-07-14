<template>


    <v-row dense>
        <v-col cols="12">
            <v-card class="border-card">
                <div v-for="(quiz, index) in topQuizzes">
                    <h3 class="topQuizList black--text">
                    <span class="pr-1">{{index + 1}}</span>
                        <span class="red--text mdi mdi-fire pr-1"></span>
                        <span class="quizTitle"> {{quiz.name}}</span></h3>
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
        font-size: 0.8em;
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
