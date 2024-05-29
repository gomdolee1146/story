export const state = () => ({
  user: "",
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  updateUserInfo(state, userInfo) {
    state.user = userInfo;
  },
};

export const actions = {
  LOGIN({ commit }, userInfo) {
    commit("updateUserInfo", userInfo);
  },
  LOGOUT({ commit }) {
    commit("updateUserInfo", "");
  },
};
