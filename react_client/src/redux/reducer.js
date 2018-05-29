import iState from './initialState';

const initReducer = (state = iState, action ) => {
    switch (action.type) {
        case "LOG_IN" :             
            return {
                ...state,
                curPage : "/main",
                curUserId : action.userId
            };
            break;
        case "NAV" :
            return {
                ...state,
                curField : action.path,
                curUserId : state.curUserId
            };
            break;
        case "LOG_OFF" : 
            return {               
                curPage : '/auth',
                curField : "",
                curUserId : -1,
                curCook : ""
            };
        case "NAV_REG" : 
            return {
                ...state,
                curPage : "/reg"
            }
        default  :
            return state
    }
}

export default initReducer;