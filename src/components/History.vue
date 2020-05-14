<template>
  <div>
    <div class="grid-container">
      <div class="row head">ID</div>
      <div class="row head">Number of cards</div>
      <div class="row head">Finished</div>
      <div class="row head">Status</div>
    </div>
    <li v-for="game in games" :key="game.id" class="grid-container">
      <div class="row">{{ game.id }}</div>
      <div class="row">{{ game.gameType }} cards</div>
      <div class="row">{{ game.status }}</div>
      <div class="row" v-if="game.winCheck === true">won</div>
      <div class="row" v-if="game.winCheck === false">lost</div>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      games: []
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:4000/games")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.games = data;
      });
  }
};
</script>
<style scoped>
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
