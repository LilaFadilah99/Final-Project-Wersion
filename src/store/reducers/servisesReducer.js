const initState = {
    services: []
}


function servisesReducer(state = initState, action ) {
    switch (action.type) {
        case 'services/getservices':
            return {...state, services: action.payload}
   
        default:
            return state          
    }

}
export default servisesReducer