<template lang="html">

    <div class="">
    <v-container>
        <quiz-category-panel />
        <quiz-category-panel />
        <quiz-category-panel />
    </v-container>
    </div>

</template>

<script>
import QuizCategoryPanel from '@/components/QuizCategoryPanel';

export default {
    name: "QuizGrid",
    components: {
        'quiz-category-panel': QuizCategoryPanel
    }
}
</script>

<style lang="css" scoped>
</style>
