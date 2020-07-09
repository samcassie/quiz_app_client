<template lang="html">

    <div class="">
        <quiz-category-grid />
    </div>

</template>

<script>
import QuizCategoryGrid from '@/components/home_page/QuizCategoryGrid';

export default {
    name: 'home_main_page',
    components: {
        'quiz-category-grid': QuizCategoryGrid
    }
}
</script>

<style lang="css" scoped>
</style>
