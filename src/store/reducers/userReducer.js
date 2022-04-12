const initState = {
    whyJoinUs: [],
}


function userReducer(state = initState, action ) {
    switch (action.type) {
        case 'whyJoinUs/getWhyJoinUs':
            return {...state, whyJoinUs: action.payload}
   
        default:
            return state          
    }

}

export default userReducer