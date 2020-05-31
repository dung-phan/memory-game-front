<template>
  <div class="wrapper">
    <div class="wrapper-left">
      <h1>Memory Game</h1>
      <hr />
      <p>This game helps you realise how bad your memory is.</p>
      <button @click="choose(4)">Easy: 4 cards</button>
      <button @click="choose(8)">Medium: 8 cards</button>
      <button @click="choose(12)">Difficult: 12 cards</button>
    </div>
    <div class="wrapper-right">
      <img src="src/assets/memory-game.png" alt="memory-game" class="memory-game" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    choose(gameType) {
      this.$store.dispatch("startGame", gameType);
      this.$router.push("/game");
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.wrapper-left {
  float: left;
  width: 40.6666666665%;
  margin-left: 8.3333333333%;
}
.wrapper-right {
  float: left;
  width: 44.9999999998%;
}
.memory-game {
  margin-top: 20px;
}
</style>
