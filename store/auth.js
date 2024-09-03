import nuxtStorage from "nuxt-storage";
import userInfo from "@/data/user";

const storage = {
  userInfoFetch() {
    if (process.client) {
      let data = {};
      if (localStorage.length > 0) {
        data = JSON.parse(localStorage.getItem("userInfo"));
      }
      let user = _.reduceRight(
        userInfo,
        function (flattened, other) {
          return flattened.concat(other);
        },
        []
      );

      let userData = [];
      data ? (userData = _.concat(user, data.value)) : userData.push(user);
      return userData;
    }
  },
};

/**
 * userInfo
 * @param {string} id
 * @param {string} userId
 * @param {string} password
 * @param {string} nickname
 * @param {object} photoList
 * @param {number} boardCount
 * @param {number} commentCount
 * @param {number} tictactoeCount
 * @param {number} cardCount
 * @param {string} mbtiResult
 */
export const state = () => ({
  userInfo: storage.userInfoFetch() || [],
});

export const mutations = {
  getUserInfo(state) {
    const userList = storage.userInfoFetch() || [];
    state.userInfo = userList;
  },
  addUserInfo(state, userInfo) {
    let userList = _.cloneDeep(state.userInfo);
    userList.push(userInfo);

    nuxtStorage.localStorage.setData("userInfo", userList);
    state.userInfo = userList;
  },
  removeUserInfo(state, userInfo) {
    let userList = _.cloneDeep(state.userInfo);
    _.remove(userList, (o) => {
      return (o.userId = userInfo.userId);
    });

    nuxtStorage.localStorage.setData("userInfo", userList);
    state.userInfo = userList;
  },
  updateUserInfo(state, userInfo) {
    let userList = _.cloneDeep(state.userInfo);

    let myIndex = _.findIndex(userList, (o) => {
      o.id === userInfo.id;
    });
    // userList[myIndex] = userInfo;
    _.assign(userList[myIndex], userInfo);

    // 쿠키에 있는 내 정보도 동일하게 수정되어야 함.
    // this.$cookie.set('userInfo', userInfo);

    nuxtStorage.localStorage.setData("userInfo", userList);
    state.userInfo = userList;
  },
};
``;
export const actions = {};

export const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
};
