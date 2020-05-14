<template>
  <div class="wrapper">
    <div class="header">
      <div class="icon play" @click="startGame">
        <img src="../assets/play.svg" alt="play" />
        <div class="button-text">Play</div>
      </div>
      <div class="icon stop" @click="checkWin">
        <img src="../assets/stop.svg" alt="stop" />
        <div class="button-text">Check</div>
      </div>
      <div class="icon history" @click="$router.push('/history')">
        <img src="../assets/history.svg" alt="history" />
        <div class="button-text">History</div>
      </div>
    </div>
    <div class="game floatCenter level-1 group hide">
      <ul class="deck floatCenter" id="card-deck">
        <li
          class="card open show disabled"
          v-for="numb in randomNumbs"
          :key="numb"
          v-bind:class="[selectedIndex == numb ? 'red' : null]"
          @click="flipCard(numb)"
        >
          <div class="back">{{ numb }}</div>
        </li>
      </ul>
      <div id="popup" class="overlay curtain hidden">
        <div v-if="winStatus === true" class="box-result">
          <img src="../assets/win.gif" alt="win" class="win" />
        </div>
        <div v-if="winStatus === false" class="box-result">
          <img src="../assets/lost.gif" alt="lost" class="lost" />
          <h2>You lost!</h2>
        </div>
        <button @click="$router.push('/')">Play again</button>
      </div>
    </div>
  </div>
</template>
<script>
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
  mounted() {
    this.$http
      .get("http://localhost:4000/game")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.randomNumbs = data.randomNumbs;
        this.gameId = data.id;
      });
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
      this.userAnswerArray.push(Number(this.selectedIndex));
      if (this.userAnswerArray.length > this.randomNumbs.length) {
        return this.userAnswerArray;
      }
    },
    checkWin() {
      this.$http
        .put(`http://localhost:4000/end/${this.gameId}`, {
          userAnswer: this.userAnswerArray
        })
        .then(response => {
          this.winStatus = response.body.winCheck;
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
.header {
  margin: 10px;
}
.icon {
  padding: 0px 30px;
}
.icon:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
.icon.history {
  float: left;
}
.icon.play {
  float: left;
}
.icon.stop {
  float: right;
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
  border: 4px solid #67d5d1;
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
  background: rgba(10, 19, 29, 0.98);
  z-index: 9;
  margin-bottom: 0;
  overflow-y: scroll;
}

.level-1 {
  max-width: 100vh;
}
.game {
  width: auto;
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
  padding-top: 2rem;
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
  font-size: 50px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #67d5d1;
  text-align: center;
  font-family: "Monoton", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
.button-text {
  font-size: 18px;
  padding-top: 5px;
  font-weight: 550;
  letter-spacing: -0.05em;
  color: #6d6d6d;
}
.box-result {
  margin-top: 2rem;
  background: rgba(10, 19, 29, 0.98);
}
.box-result .lost {
  width: 30%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
}
.box-result .win {
  width: 30%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
}
</style>
