// rxslice

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    arrComment : [
        {name:'mentor', content:'Chao mn'},
        {name:'Mary1', content:'Hi'},
        {name:'Zero', content:'hello'},
    ]
}
const facebookReducer = createSlice({
    name: 'faceReducer',
    initialState,
    reducers:{
        addComment : (state, action) => {
            let content = action.payload;
            
            state.arrComment.push(content);
            console.log("🚀 ~ file: facebookReducer.jsx:20 ~ arrComment:", state.arrComment)

            return state;
        }
    }
})

export  const {addComment} = facebookReducer.actions;
export default facebookReducer.reducer