import { createStore } from "vuex";
import preloaderModule from "./modules/preloader.module.js";

const store = createStore({
  modules: {
    preloaderModule,
  },
});

export default store;
