export const CHANGE_THEME = "change_theme";

export const SET_THEME_LIGHT = "set_theme";

export default {
  state: () => ({
    themeLight: false,
  }),
  mutations: {
    [CHANGE_THEME](state, payload) {
      state.themeLight = payload;

      if (state.themeLight) {
        document.body.classList.add("theme-light");
      } else {
        document.body.classList.remove("theme-light");
      }
    },
  },
  actions: {
    [SET_THEME_LIGHT]({ commit }, status) {
      commit(CHANGE_THEME, status);
    },
  },
  getters: {},
};
