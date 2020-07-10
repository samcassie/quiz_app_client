<template>

    <v-row dense>
        <v-col cols="12">

            <!-- This is the quiz panel -->
            <v-dialog v-model="dialog" persistent max-width="500">
                <template v-slot:activator="{ on, attrs }">

                    <v-card v-on="on" v-bind="attrs">
                        <v-img
                        class="white--text align-end"
                        gradient="to bottom, rgba(101,131,242), rgba(0,0,0,.5)"
                        height="100px"
                        >
                        <v-card-title class="headline">{{ quiz.name }}</v-card-title>
                        </v-img>
                    </v-card>
                </template>


                <!-- This is the pop up box -->
                <v-card>
                    <v-card-title class="headline">{{ quiz.name }} <span v-if="gameActive == true"> - Score: {{score}} </span> </v-card-title>
                    <v-card-text v-if="gameActive == false">Click Start to begin. Be careful of the timer.</v-card-text>


                    <v-card-text v-if="gameActive == true" class="questionText">

                        {{quiz.questions[index].question}}
                        <br>
                        <br>

                        <div v-for="answer in quiz.questions[index].answers">
                            <input type="radio" name="answer" :value="quiz.questions[index].answers.indexOf(answer)"> <label for="answer" class="answerLabel">{{answer}}</label>
                        </div>

                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="nextQuestion" v-if="gameActive == true">Next</v-btn>
                        <v-btn color="green darken-1" text @click="gameActive = true" v-if="gameActive == false">Start</v-btn>
                        <v-btn color="red darken-1" text @click="quitQuiz">Quit</v-btn>
                    </v-card-actions>
                </v-card>



            </v-dialog>
        </v-col>
    </v-row>


</template>

<script>
export default {
    data () {
        return {
            dialog: false,
            gameActive: false,
            index: 0,
            score: 0
        }
    },
    props: ['quiz'],
    methods: {
        nextQuestion () {
            if ((document.querySelector('input[name = "answer"]:checked').value) == this.quiz.questions[this.index].correctAnswerIndex){
                this.score += 1
            }
            if (this.index <= this.quiz.questions.length) {
                this.index += 1;
            }
            document.querySelector('input[name="answer"]:checked').checked = false;
        },

        quitQuiz () {
            this.dialog = false;
            this.gameActive = false;
            this.index = 0;
            this.score = 0
        }
    }

}
</script>

<style media="screen" scoped>

    .answerLabel {
        margin-left: 10px;
    }

    .questionText {
        font-weight: bolder;
    }

</style>
