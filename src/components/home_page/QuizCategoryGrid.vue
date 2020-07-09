<template lang="html">

    <div class="">
    <v-container>
        <quiz-category-panel name="Sports"/>
        <quiz-category-panel name="Space"/>
        <quiz-category-panel name="Geography"/>
    </v-container>
    </div>

</template>

<script>
import QuizCategoryPanel from '@/components/home_page/QuizCategoryPanel';

export default {
    name: "QuizGrid",
    components: {
        'quiz-category-panel': QuizCategoryPanel
    }
}
</script>

<style lang="css" scoped>

</style>
