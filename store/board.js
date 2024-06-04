import { boardInfo } from "@/data/board";

/**
 * @param {number} id
 * @param {string} title
 * @param {string} content
 * @param {string} writer
 * @param {number} likeCount
 * @param {array} likeUsers
 * @param {array} commentList
 */

export const state = () => ({
  boardInfo: boardInfo,
});

export const mutations = {
  saveBoardInfo(state, board) {
    state.boardInfo.push(board);
  },
  addLikeCount(state, idx) {
    state.boardInfo[idx].likeCount = state.boardInfo[idx].likeCount + 1;
  },
};

export const actions = {
  SAVE_BOARD_INFO({ commit }, boardData) {
    commit("saveBoardInfo", boardData);
  },
};

export const getters = {};
