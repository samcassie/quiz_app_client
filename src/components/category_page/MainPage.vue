<template lang="html">

    <div>

        <quiz-list />

    </div>

</template>

    <script>

    import QuizList from '@/components/category_page/QuizList';

    export default {
        name: 'home_main_page',
        components: {
            'quiz-list': QuizList
        }
    }
    </script>

    <style lang="css" scoped>
    </style>
