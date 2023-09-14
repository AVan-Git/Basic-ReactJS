const stateDefault = {
  commentInfo: {
    name: "Tran an Bao",
    content: "1230..",
  },
  arrComment: [
    { name: "Nguyen Van A", content: "like like ..." },
    { name: "Nguyen Van B", content: "likee likee ..." },
    { name: "Nguyen thi C", content: "NOoooooo..." },
  ],
};

export const commentReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      // lay du lieu vua gui den
      let { id, value } = action.payload;
      // doi vs state la obj || arr thi phai  clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      // thay doi state
      commentInfoUpdate[id] = value;

      // gan ve state cu
      state.commentInfo = commentInfoUpdate;
      break;
    case "HANDLE_SUBMIT":
      //lay data gui len
      let commentInfo = action.payload;

      //lay  data cu
      let arrCommentUpdate = [...state.arrComment];
      // them comment moi
      arrCommentUpdate.push(commentInfo);

      //cap nhat vao arr state
      state.arrComment = arrCommentUpdate;

      // khoi phuc form nhap
      state.commentInfo = {
        name: "",
        content: "",
      };
      break;

    case "DELETE_COMMENT": {
      let index = action.payload;
      console.log(
        "🚀 ~ file: commentReducers.jsx:48 ~ commentReducers ~ index:",
        index
      );

      let arrCommentNew = [...state.arrComment];

      arrCommentNew.splice(index, 1);
      console.log(
        "🚀 ~ file: commentReducers.jsx:53 ~ commentReducers ~ arrCommentNew:",
        arrCommentNew
      );

      state.arrComment = arrCommentNew;
      break;
    }
    case "EDIT_COMMENT": {
      // b1 lay vitri data can update o trong arr
      let index = action.payload;

      // hiện thông tin cu lên form 
      state.commentInfo = state.arrComment[index]
      
    }
    default:
      break;
  }
  return { ...state };
};
