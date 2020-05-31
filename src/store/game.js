import axios from "axios";
const baseUrl = "http://memory-game-back.herokuapp.com";
//const baseUrl = "http://localhost:4000";
const state = {
  game: {},
  games: []
};

const mutations = {
  GET_GAME(state, game) {
    state.game = game;
  },
  START_GAME(state, game) {
    state.game = game;
  },
  GET_HISTORY(state, games) {
    state.games = games;
  }
};
const actions = {
  getGame: ({ commit }) => {
    return new Promise(resolve => {
      axios
        .get(`${baseUrl}/game`)
        .then(response => {
          commit("GET_GAME", response.data);
          resolve();
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  startGame: ({ commit }, gameType) => {
    return new Promise(resolve => {
      axios
        .post(`${baseUrl}/start`, {
          gameType: gameType
        })
        .then(response => {
          commit("START_GAME", response.data);
          resolve();
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  getHistory: ({ commit }) => {
    return new Promise(resolve => {
      axios
        .get(`${baseUrl}/games`)
        .then(response => {
          commit("GET_HISTORY", response.data);
          resolve();
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
};
const getters = {
  fetchedGames: state => state.games,
  fetchedGame: state => state.game
};
export default {
  state,
  mutations,
  actions,
  getters
};
