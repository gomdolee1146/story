import { boardInfo } from "@/data/board";

/**
 * @param {number} id
 * @param {string} date
 * @param {string} title
 * @param {string} content
 * @param {string} writer
 * @param {string} writerThumb
 * @param {number} likeCount
 * @param {array<{id: number, userId: string, nick: string, photoList: String } >} likeUsers
 * @param {array<{id: number, date:number, writer: string, writerThumb: string, commentContent: string }>} commentList
 */

export const state = () => ({
  boardInfo: boardInfo,
});

export const mutations = {
  saveBoardInfo(state, boardData) {
    if (boardData.id !== "") {
      let board = _.find(state.boardInfo, (o) => {
        return o.id.toString() === boardData.id.toString();
      });
      _.assign(board, boardData.board);
    } else {
      state.boardInfo.push(boardData.board);
    }
  },
  deleteBoardInfo(state, boardData) {
    _.remove(state.boardInfo, (o) => {
      return o.id.toString() === boardData.toString();
    });
  },

  addLikeCount(state, likeInfo) {
    // let { id, likeUser } = likeInfo;
    // state.boardInfo[id].likeCount = state.boardInfo[id].likeCount + 1;
    // state.boardInfo[id].likeUsers.push(likeUser);
  },
  saveCommentInfo(state, commentInfo) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === commentInfo.boardId.toString();
    });
    board.commentList.push(commentInfo.commentContent);
  },
  deleteMyComment(state, myCommentInfo) {
    _.remove(state.boardInfo, (o) => {
      return o.id.toString() === myCommentInfo.boardId.toString();
    });

    // state.boardInfo[myCommentInfo.boardId].commentList.splice(
    //   myCommentInfo.myCommentNum,
    //   1
    // );
  },
  deleteCommentList(state, deleteList) {
    let deleteComment = _.cloneDeep(_.find(state.boardInfo), (o) => {
      return o.id.toString() === deleteList.boardId.toString()
    });
    _.pullAt(deleteComment, deleteList.deleteNum);
    deleteComment.commentList = deleteComment;
  },
};

export const actions = {
  SAVE_BOARD_INFO({ commit }, boardData) {
    commit("saveBoardInfo", boardData);
  },
};

export const getters = {};
