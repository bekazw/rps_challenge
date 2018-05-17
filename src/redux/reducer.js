import iState from './initialState';

const initReducer = (state = iState, action ) => {
    switch (action.type) {
        case "LOG_IN" :             
            return {
                ...state,
                curPage : "/main",
                curUserId : action.userId
            }
            
        default  :
            return state
    }
}

export default initReducer;