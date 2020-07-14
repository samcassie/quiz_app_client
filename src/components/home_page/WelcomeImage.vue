<template>

    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card class="border-card">
                    <v-img

                    src="https://www.bls.gov/spotlight/2017/sports-and-exercise/images/cover_image.jpg"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                    >
                        <v-card-title class="category-name">Welcome</v-card-title>
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
        border: 2px solid #0C4A60 !important;
    }

    .category-name {
        font-size: 1.9em !important;
        text-decoration: none !important;
        font-style: normal;

    }
</style>
