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
  likeModal: false,
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
    let boardClone = _.cloneDeep(state.boardInfo);
    _.remove(boardClone, (o) => {
      return o.id.toString() === boardData.toString();
    });
    state.boardInfo = boardClone;
  },
  addLikeCount(state, likeInfo) {
    let { id, likeUserInfo } = likeInfo;
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === id.toString();
    });

    let userCheck = _.find(board.likeUsers, (o) => {
      return o.id.toString() === likeUserInfo.id.toString();
    });
    if (userCheck === undefined) { // 조건 다시 확인
      board.likeCount = board.likeCount + 1;
      board.likeUsers.push(likeUserInfo);
    } else {
      state.likeModal = true;
    }
  },
  saveCommentInfo(state, commentInfo) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === commentInfo.boardId.toString();
    });
    board.commentList.push(commentInfo.commentContent);
  },

  // 2. 내가 작성한 댓글 삭제하기
  deleteMyComment(state, myCommentInfo) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === myCommentInfo.boardId.toString();
    });
    board.commentList.splice(myCommentInfo.myCommentNum, 1);
  },

  // 1. 내 게시글에 달려있는 댓글 삭제하기
  deleteCommentList(state, deleteList) {
    let board = _.find(state.boardInfo, (o) => {
      return o.id.toString() === deleteList.boardId.toString();
    });
    let test = _.pullAt(board.commentList, deleteList.deleteNum);
    console.log(test);
    console.log(board.commentList);
  },
};

export const actions = {
  SAVE_BOARD_INFO({ commit }, boardData) {
    commit("saveBoardInfo", boardData);
  },
};

export const getters = {};
