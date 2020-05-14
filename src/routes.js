import Home from "./components/Home.vue";
import Game from "./components/Game.vue";
import History from "./components/History.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/game", component: Game },
  { path: "/history", component: History }
];
