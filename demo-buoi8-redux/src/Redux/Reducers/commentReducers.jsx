

const stateDefault = {
    commentInfo:{
        name: 'Tran an Bao',
        content: '1230..'
    },
    arrComment:[
        {name: 'Nguyen Van A', content: 'like like ...'},
        {name: 'Nguyen Van B', content: 'likee likee ...'},
        {name: 'Nguyen thi C', content: 'NOoooooo...'},
    ]
}

export const commentReducers = ( state = stateDefault, action ) => {

    switch (action.type) {
        case "HANDLE_CHANGE":
            // lay du lieu vua gui den
            let {id, value} = action.payload;
            // doi vs state la obj || arr thi phai  clone state ra
            let commentInfoUpdate = {...state.commentInfo}
            // thay doi state
            commentInfoUpdate[id] = value;

            // gan ve state cu
            state.commentInfo = commentInfoUpdate
            break;
        case 'HANDLE_SUBMIT':
            //lay data gui len 
            let commentInfo = action.payload;
           
            //lay  data cu
            let arrCommentUpdate =  [...state.arrComment];
            // them comment moi
            arrCommentUpdate.push(commentInfo);

            //cap nhat vao arr state
            state.arrComment = arrCommentUpdate
            
            // khoi phuc form nhap
            state.commentInfo = {
                name:'',
                content:''
            }
            break;
        default:
            break;
    }
    return {...state};

}