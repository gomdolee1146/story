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
    let { id, likeUser } = likeInfo;
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === id.toString();
    })

    board.likeCount = board.likeCount + 1;
    board.likeUsers.push(likeUser);
  },
  saveCommentInfo(state, commentInfo) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === commentInfo.boardId.toString();
    });
    board.commentList.push(commentInfo.commentContent);
  },
  deleteMyComment(state, myCommentInfo) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === myCommentInfo.boardId.toString();
    });
    board.commentList.splice(myCommentInfo.myCommentNum, 1);
  },
  deleteCommentList(state, deleteList) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === deleteList.boardId.toString();
    });
    _.pullAt(board.commentList, deleteList.deleteNum);
  },
};

export const actions = {
  SAVE_BOARD_INFO({ commit }, boardData) {
    commit("saveBoardInfo", boardData);
  },
};

export const getters = {};
