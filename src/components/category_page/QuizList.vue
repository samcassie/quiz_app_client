<template lang="html">

    <div class="">
    <v-container>
        <quiz-panel />
        <quiz-panel />
        <quiz-panel />
    </v-container>
    </div>

</template>

<script>
import QuizPanel from '@/components/category_page/QuizPanel';

export default {
    name: "QuizList",
    components: {
        'quiz-panel': QuizPanel
    }
}
</script>

<style lang="css" scoped>

</style>
