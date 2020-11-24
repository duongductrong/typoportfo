export const OPEN_PRELOADER = "open_preloader";
export const CLOSE_PRELOADER = "close_preloader";

export const SET_PRELOADER = "set_preloader";

export default {
  state: () => ({
    preloader: false,
  }),
  mutations: {
    [OPEN_PRELOADER](state) {
      state.preloader = true;
    },

    [CLOSE_PRELOADER](state) {
      state.preloader = false;
    },
  },
  actions: {
    [SET_PRELOADER]({ commit }, status) {
      commit(status === true ? OPEN_PRELOADER : CLOSE_PRELOADER);
    },
  },
  getters: {},
};
