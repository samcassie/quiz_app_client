<template>

        <v-row dense>
            <v-col cols="12">
                <v-card>
                    <v-img
                    class="white--text align-end"
                    gradient="to bottom, rgba(101,131,242), rgba(0,0,0,.5)"
                    height="100px"
                    >
                        <v-card-title class="headline">{{ quiz.name }}</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>

</template>

<script>
export default {
    data: () => ({


    }),
    props: ['quiz']
}
</script>
