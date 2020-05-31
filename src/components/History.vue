<template>
  <div class="wrapper">
    <div class="grid-container">
      <div class="row head">ID</div>
      <div class="row head">Number of cards</div>
      <div class="row head">Finished</div>
      <div class="row head">Status</div>
    </div>
    <li v-for="game in fetchedGames" :key="game.id" class="grid-container">
      <div class="row">{{ game.id }}</div>
      <div class="row">{{ game.gameType }} cards</div>
      <div class="row">{{ game.status }}</div>
      <div class="row" v-if="game.winCheck === true">Won</div>
      <div class="row" v-if="game.winCheck === false">Lost</div>
      <div class="row" v-if="game.winCheck === null">Not Finished</div>
    </li>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      games: []
    };
  },
  computed: { ...mapGetters(["fetchedGames"]) },
  mounted() {
    this.$store.dispatch("getHistory");
  }
};
</script>
<style scoped>
.wrapper {
  margin: 2rem;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr;
  gap: 6px 15px;
  grid-template-areas: ". . . . . .";
}
.row {
  padding: 7px;
  text-align: center;
  color: #42b983;
  background: #f5f5f5;
  border-style: none;
  border-radius: 10px;
  margin-bottom: 3px;
}

.row.head {
  font-size: 20px;
  color: grey;
  background: #eaeaea;
  border-style: none;
  border-radius: 10px;
}
</style>
