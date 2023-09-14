

const stateDefault = {
    commentInfo:{
        name: '',
        content: ''
    },
    arrComment:[
        {name: 'Nguyen Van A', content: 'like like ...'},
        {name: 'Nguyen Van B', content: 'likee likee ...'},
        {name: 'Nguyen thi C', content: 'NOoooooo...'},
    ]
}

export const commentReducers = ( state = stateDefault, action ) => {

    switch (action.type) {
        case "":
            
            break;
    
        default:
            return state;
    }

}