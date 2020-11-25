export const CHANGE_THEME = "change_theme";

export const SET_THEME_LIGHT = "set_theme";

export default {
  state: () => ({
    themeLight: false,
  }),
  mutations: {
    [CHANGE_THEME](state, payload) {
      state.themeLight = payload;
    },
  },
  actions: {
    [SET_THEME_LIGHT]({ commit }, status) {
      commit(status);
    },
  },
  getters: {},
};
