<template>

    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card class="border-card">
                    <v-img

                    src="https://tedideas.files.wordpress.com/2018/08/featured_art_iowa_big.jpg"
                    class="white--text align-center"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                    >
                        <v-card-title class="category-name">QUIZ CLOCK</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>


</template>

<script>
export default {
    data: () => ({


    })
}
</script>

<style lang="css" scoped>

    .border-card {
        border: 5px solid #0C4A60 !important;
    }

    .category-name {
        font-size: 7em !important;
        font-size: 10vh !important;
        font-family: 'Modak', cursive;
        text-decoration: none !important;
        font-style: normal;
        justify-content: center;

    }
</style>
