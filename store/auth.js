import nuxtStorage from "nuxt-storage";

const storage = {
  fetch() {
    const arr = [];
    if (process.client) {
      arr.push(JSON.parse(localStorage.getItem("userInfo")));
    }
    return arr;
  },
};

export const state = () => ({
  userInfo: storage.fetch(),
});

export const mutations = {
  getUserInfo(state){
    const userList = storage.fetch()
    state.userInfo = userList
  },
  addUserInfo(state, userInfo) {
    let userData = { user: userInfo };
    let userList = _.cloneDeep(state.userInfo);

    userList.push(userData);

    nuxtStorage.localStorage.setData("userInfo", userList);
    state.userInfo = userList;
  },
  removeUserInfo(state, payload) {
    localStorage.removeData(payload.userInfo);
    state.userInfo.splice(payload.index, 1);
  },
};

export const actions = {};

export const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
};
