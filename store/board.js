import { boardInfo } from "@/data/board";

/**
 * @param {number} id
 * @param {string} date
 * @param {string} title
 * @param {string} content
 * @param {string} writer
 * @param {string} writerThumb
 * @param {number} likeCount
 * @param {array} likeUsers
 * @param {array<{id: number, date:number, writer: string, writerThumb: string, commentContent: string }>} commentList
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
  saveCommentInfo(state, commentInfo) {
    state.boardInfo[commentInfo.boardIdx].commentList.push(
      commentInfo.commentContent
    );
  },
  deleteCommentList(state, deleteList) {
    
  }
};

export const actions = {
  SAVE_BOARD_INFO({ commit }, boardData) {
    commit("saveBoardInfo", boardData);
  },
};

export const getters = {};
