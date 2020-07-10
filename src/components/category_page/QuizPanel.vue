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
                    <v-card-title class="headline justify-space-between pb-8">{{ quiz.name }}
                        <span v-if="(gameActive == 2) && ((showTimer == true) && (countdown != 0))" class="red--text">
                            {{countdown}}
                        </span>

                        <span v-if="timeUp && showTimer" class="red--text time">TIME UP</span>

                        <span v-if="justInTime" class="green--text time2">JUST IN TIME</span>


                        <span v-if="gameActive == 2"> Q{{index + 1}}/10</span>
                    </v-card-title>

                    <v-card-text v-if="gameActive == 1">Click Start to begin. Be careful of the timer.</v-card-text>


                    <v-card-text v-if="gameActive == 2" class="questionText" align="center" justify="center">

                        <span class="font-weight-black question" >{{quiz.questions[index].question}}</span>
                        <br>
                        <br>

                        <v-row no-gutters>
                          <template v-for="(answer, panelIndex) in quiz.questions[index].answers">
                            <v-col :key="panelIndex">
                              <v-card
                                shaped
                                class="pa-2 ma-1 answer-border rounded"
                                v-bind:class="{ correct : (hasAnswered && panelIndex == quiz.questions[index].correctAnswerIndex), red : (hasAnswered && panelIndex == selectedIndex && panelIndex != quiz.questions[index].correctAnswerIndex)}"
                                tile @click="checkAnswer(panelIndex)"
                              >
                                {{answer}}
                              </v-card>
                            </v-col>
                            <v-responsive
                              v-if="panelIndex === 1"
                              :key="`width-${panelIndex}`"
                              width="100%"
                            ></v-responsive>
                          </template>
                        </v-row>

                    </v-card-text>

                    <v-card-text v-if="gameActive == 3">Quiz completed! You scored {{score}}.</v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="finishQuiz()" v-if="finishButton == true">Finish Quiz</v-btn>
                        <v-btn color="green darken-1" text @click="nextQuestion()" v-if="nextButton == true">Next Question</v-btn>
                        <v-btn color="green darken-1" text @click="startGame()" v-if="gameActive == 1">Start</v-btn>
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
            finishButton: false,
            countdown: 10,
            showTimer: true,
            justInTime: false,
            timeUp: false
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
            };
            if ((this.countdown == 1) && ((cardIndex) == this.quiz.questions[this.index].correctAnswerIndex)) {
                this.justInTime = true;
                this.showTimer = false
            } else if (this.countdown != "0") {
                this.showTimer = false
            }
        },

        startGame(){
            this.gameActive = 2;
            this.countdown = 10;
            this.showTimer = true;
            this.countdownTimer();
        },

        nextQuestion () {
            if (this.index <= this.quiz.questions.length) {
                this.index += 1;
            }
            this.nextButton = false;
            this.hasAnswered = false;
            this.selectedIndex = null;
            this.showTimer = true;
            this.justInTime = false;
            this.timeUp = false;
            if (this.countdown == 0){
                this.countdown = 10;
                this.countdownTimer()
            } else {
                this.countdown = 10;
            }
        },

        quitQuiz () {
            this.dialog = false;
            this.nextButton = false;
            this.hasAnswered = false;
            this.gameActive = 1;
            this.index = 0;
            this.score = 0;
            this.finishButton = false;
            this.countdown = null;
            this.justInTime = false;
        },

        finishQuiz () {
            this.finishButton = false;
            this.gameActive = 3;
            this.countdown = null;
            this.justInTime = false;
            this.timeup = false;
        },

        countdownTimer() {
                if(this.countdown > 0) {
                    setTimeout(() => {
                        this.countdown -= 1
                        this.countdownTimer()
                    }, 1000)
                } else if ((this.countdown == 0) && (this.gameActive == 2)) {
                    this.countdown = 0;
                    this.checkAnswer()
                    this.timeUp = true;
                }
            }
    }
}

</script>

<style media="screen" scoped>

    .answer-border {
        border: 1px solid black;
    }

    .correct {
        background-color: green;
        color: white;
    }

    .question {
        font-size: 1.1em;
    }

    .time {
        font-size: 0.7em;
    }

    .time2 {
        font-size: 0.5em;
    }

</style>
