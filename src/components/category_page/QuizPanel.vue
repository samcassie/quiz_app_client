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
                    <v-card-title class="headline justify-space-between">{{ quiz.name }} <span v-if="gameActive == 2"> Q{{index + 1}}/10</span> </v-card-title>
                    <v-card-text v-if="gameActive == 1">Click Start to begin. Be careful of the timer.</v-card-text>


                    <v-card-text v-if="gameActive == 2" class="questionText">

                        {{quiz.questions[index].question}}
                        <br>
                        <br>

                        <v-row no-gutters>
                          <template v-for="(answer, panelIndex) in quiz.questions[index].answers">
                            <v-col :key="panelIndex">
                              <v-card
                                class="pa-2"
                                v-bind:class="{ green : (hasAnswered && panelIndex == quiz.questions[index].correctAnswerIndex), red : (hasAnswered && panelIndex == selectedIndex && panelIndex != quiz.questions[index].correctAnswerIndex)}"
                                outlined
                                tile @click="checkAnswer(panelIndex)"
                              >
                                {{answer}}
                              </v-card>
                            </v-col>
                            <v-responsive
                              v-if="panelIndex === 1"
                              :key="`width-${n}`"
                              width="100%"
                            ></v-responsive>
                          </template>
                        </v-row>

                    </v-card-text>

                    <v-card-text v-if="gameActive == 3">Game completed! You scored {{score}}.</v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="finishQuiz" v-if="finishButton == true">Finish Quiz</v-btn>
                        <v-btn color="green darken-1" text @click="nextQuestion" v-if="nextButton == true">Next Question</v-btn>
                        <v-btn color="green darken-1" text @click="gameActive = 2" v-if="gameActive == 1">Start</v-btn>
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
            gameActive: 1,
            nextButton: false,
            hasAnswered: false,
            index: 0,
            score: 0,
            selectedIndex: null,
            finishButton: false
        }
    },
    props: ['quiz'],
    methods: {
        checkAnswer(cardIndex) {
            if (this.hasAnswered == false) {
                if ((cardIndex) == this.quiz.questions[this.index].correctAnswerIndex){
                    this.score += 1;
                }
                if ((this.index + 1) < this.quiz.questions.length) {
                    this.nextButton = true;
                } else {
                    this.finishButton = true;
                }
                this.hasAnswered = true;
                this.selectedIndex = cardIndex;
            }
        },

        nextQuestion () {
            if (this.index <= this.quiz.questions.length) {
                this.index += 1;
            }
            this.nextButton = false;
            this.hasAnswered = false;
            this.selectedIndex = null;
        },

        quitQuiz () {
            this.dialog = false;
            this.nextButton = false;
            this.hasAnswered = false;
            this.gameActive = 1;
            this.index = 0;
            this.score = 0;
            this.finishButton = false;
        },

        finishQuiz () {
            this.finishButton = false;
            this.gameActive = 3;
        }
    }
}

</script>

<style media="screen" scoped>

    #scoreCounter {
        right: 0;
    }

</style>
