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
  saveBoardInfo(state, boardData) {
    const { idx, board } = boardData;
    if (idx !== "") {
      _.assign(state.boardInfo[idx], board);
    } else {
      state.boardInfo.push(board);
    }
  },
  deleteBoardInfo(state, board) {
    state.boardInfo.splice(board.boardIdx, 1);
  },
  addLikeCount(state, idx) {
    state.boardInfo[idx].likeCount = state.boardInfo[idx].likeCount + 1;
  },
  saveCommentInfo(state, commentInfo) {
    state.boardInfo[commentInfo.boardIdx].commentList.push(
      commentInfo.commentContent
    );
  },
  deleteMyComment(state, myCommentInfo) {
    state.boardInfo[myCommentInfo.boardIdx].commentList.splice(
      myCommentInfo.myCommentNum,
      1
    );
  },
  deleteCommentList(state, deleteList) {
    let deleteComment = _.cloneDeep(
      state.boardInfo[deleteList.boardIdx].commentList
    );

    _.pullAt(deleteComment, deleteList.deleteNum);
    state.boardInfo[deleteList.boardIdx].commentList = deleteComment;
  },
};

export const actions = {
  SAVE_BOARD_INFO({ commit }, boardData) {
    commit("saveBoardInfo", boardData);
  },
};

export const getters = {};
