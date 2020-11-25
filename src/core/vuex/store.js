import { createStore } from "vuex";
import preloaderModule from "./modules/preloader.module.js";
import themeModule from "./modules/theme.module";

const store = createStore({
  modules: {
    preloaderModule,
    themeModule
  },
});

export default store;
