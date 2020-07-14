<template>

    <router-link :to="{path: '/category/' + category.slug}">
        <v-row dense>
            <v-col cols="12">
                <v-card class="border-card">
                    <v-img
                    :src_x="category.imageUrl"

                    src="https://www.bls.gov/spotlight/2017/sports-and-exercise/images/cover_image.jpg"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="150px"
                    >
                        <v-card-title class="category-name">{{category.name}}</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </router-link>

</template>

<script>
export default {
    data: () => ({


    }),
    props: ['category']
}
</script>

<style lang="css" scoped>

    .border-card {
        border: 2px solid #0C4A60 !important;
    }

    .category-name {
        font-size: 1.9em !important;
        text-decoration: none !important;
        font-style: normal;

    }
</style>
