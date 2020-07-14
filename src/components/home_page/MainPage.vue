<template lang="html">

    <div class="">
        <welcome-image />
        <quiz-category-grid />
    </div>

</template>

<script>
import QuizCategoryGrid from '@/components/home_page/QuizCategoryGrid';
import WelcomeImage from '@/components/home_page/WelcomeImage';

export default {
    name: 'home_main_page',
    components: {
        'quiz-category-grid': QuizCategoryGrid,
        'welcome-image': WelcomeImage
    }
}
</script>

<style lang="css" scoped>
</style>
