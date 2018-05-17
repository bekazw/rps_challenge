let LogInAction = (CurUserId) => {
    return {
        type : "LOG_IN",
        userId : CurUserId
    }
};

export default LogInAction;