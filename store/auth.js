import nuxtStorage from "nuxt-storage";

const storage = {
  fetch() {
    const arr = [];
    if (nuxtStorage.localStorage.length > 0) {
      for (let i = 0; i < nuxtStorage.localStorage.length; i++) {
        if (nuxtStorage.localStorage.Key !== "loglevel:webpack-dev-server") {
          arr.push(
            JSON.parse(
              nuxtStorage.localStorage.getItem(nuxtStorage.localStorage.key(i))
            )
          );
        }
      }
    }
    return arr;
  },
};

export const state = () => ({
  userInfo: storage.fetch(),
});

export const mutations = {
  addUserInfo(state, userInfo) {
    let userData = { user: userInfo };
    let userList = _.cloneDeep(state.userInfo);

    userList.push(userData);

    nuxtStorage.localStorage.setData("userInfo", JSON.stringify(userList));
    state.userInfo = userList;
  },
  removeUserInfo(state, payload) {
    localStorage.removeItem(payload.userInfo);
    state.userInfo.splice(payload.index, 1);
  },
};

export const actions = {};

export const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
};
