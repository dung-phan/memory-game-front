<template>
  <div class="wrapper">
    <div class="header">
      <div class="icon play" @click="startGame">
        <img src="../assets/play.svg" alt="play" class="icon-image" />
        <div class="button-text">Play</div>
      </div>
      <div class="icon stop" @click="checkWin">
        <img src="../assets/stop.svg" alt="stop" class="icon-image" />
        <div class="button-text">Check</div>
      </div>
      <div class="icon history" @click="$router.push('/history')">
        <img src="../assets/history.svg" alt="history" class="icon-image" />
        <div class="button-text">History</div>
      </div>
    </div>
    <div class="game floatCenter level-1 group hide">
      <ul class="deck floatCenter" id="card-deck">
        <li
          class="card open show disabled"
          v-for="numb in fetchedGame.randomNumbs"
          :key="numb"
          v-bind:class="[selectedIndex == numb ? 'red' : null]"
          @click="flipCard(numb)"
        >
          <div class="back">{{ numb }}</div>
        </li>
      </ul>
      <div id="popup" class="overlay curtain hidden">
        <div class="box-result floatCenter">
          <span class="level" v-if="fetchedGame.randomNumbs.length === 4">LEVEL: Easy</span>
          <span class="level" v-if="fetchedGame.randomNumbs.length === 8">LEVEL: Medium</span>
          <span class="level" v-if="fetchedGame.randomNumbs.length === 12">LEVEL: Difficult</span>
          <div class="sm-break" />
          <hr class="floatCenter" />
          <div class="sm-break" />
          <div class="floatCenter result">Your result:</div>
          <div v-if="winStatus === true" class="win">Won</div>
          <div v-if="winStatus === false" class="lost">Lost</div>
        </div>
        <button @click="$router.push('/')">Play again</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { store } from "../store/store";
export default {
  data() {
    return {
      randomNumbs: [],
      selectedIndex: Number,
      userAnswerArray: [],
      gameId: Number,
      winStatus: null
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("getGame").then(() => next());
  },
  computed: { ...mapGetters(["fetchedGame"]) },
  mounted() {
    this.$store.dispatch("getGame");
  },
  methods: {
    startGame() {
      const board = Array.from(
        document.getElementsByClassName("card open show disabled")
      );
      const back = Array.from(document.getElementsByClassName("back"));

      board.map(card => {
        return (card.className = "card");
      });
      back.map(card => {
        return (card.style.visibility = "hidden");
      });
    },
    flipCard(index) {
      this.selectedIndex = index;
      const cards = Array.from(document.getElementsByClassName("back"));
      const selectedCard = cards.filter(
        card => card.innerHTML == this.selectedIndex
      );
      selectedCard[0].style.visibility = "visible";
      this.userAnswerArray.push(Number(this.selectedIndex));
      if (this.userAnswerArray.length > this.randomNumbs.length) {
        return this.userAnswerArray;
      }
    },
    checkWin() {
      this.gameId = this.$store.state.game.game.id;
      this.$http
        .put(`http://memory-game-back.herokuapp.com/end/${this.gameId}`, {
          userAnswer: this.userAnswerArray
        })
        .then(response => {
          this.winStatus = response.data.winCheck;
          const result = document.getElementById("popup");
          if (this.winStatus || !this.winStatus) {
            result.className = "overlay curtain show";
          }
        });
    }
  }
};
</script>
<style>
@font-face {
  font-family: "CombiNumeralsLtd";
  src: url("../assets/font/CombiNumeralsLtd.otf");
}
.header {
  padding: 1rem;
  height: 12vh;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.25);
}
.icon {
  padding: 0px 30px;
}
.icon:hover {
}
.icon.history {
  float: left;
  text-align: center;
}
.icon.play {
  float: left;
}
.icon.stop {
  float: right;
}
.icon-image:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.deck .card.disabled {
  pointer-events: none;
}
.deck .card.open {
  transform: rotateY(0);
  background: #fafafa;
  cursor: default;
  animation-name: flipInY;
  backface-visibility: visible !important;
  animation-duration: 0.75s;
}
.show {
  visibility: visible;
  opacity: 100 !important;
}
.hidden {
  visibility: hidden;
}
.red {
  border: 2px solid #67d5d1;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 500ms;
  text-align: center;
  color: white;
}
.curtain {
  display: block;
  background: rgba(10, 19, 29);
  z-index: 9;
  margin-bottom: 0;
  overflow-y: scroll;
}

.level-1 {
  max-width: 90vh;
}
.level {
  font-family: acumin-pro, Helvetica, Arial, sans-serif;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-size: 16px;
  background: black;
  color: white;
}
.sm-break {
  margin-bottom: 2rem;
}
.group:after {
  content: "";
  display: table;
  clear: both;
}
.deck {
  max-width: none;
  padding: 1rem;
  list-style: none;
  width: auto;
}
.floatCenter {
  margin-left: auto;
  margin-right: auto;
}
.deck .card {
  height: 17vh;
  width: 17vh;
  margin: 1vh 1vh;
  background: url(../assets/card-icon.svg) center center/40% no-repeat,
    linear-gradient(135deg, #90f1ee 0%, #67d5d1 100%);
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25), 4px 4px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
.back {
  font-size: 80px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -20%);
  transform: translate(-50%, -20%);
  color: #67d5d1;
  text-align: center;
  font-family: "CombiNumeralsLtd", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
.button-text {
  font-size: 18px;
  padding-top: 5px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: -0.06em;
  color: #9c9c9c;
}
.box-result {
  margin-top: 3.125rem;
  background: rgba(10, 19, 29, 0.98);
  text-align: center;
}
.box-result .win,
.lost {
  font-size: 3rem;
  padding: 1rem;
  margin: 2rem;
  background: rgba(10, 19, 29, 0.98);
  color: #67d5d1;
}

.result {
  font-size: 1.2rem;
  color: white;
  background: rgba(10, 19, 29, 0.98);
}
</style>
