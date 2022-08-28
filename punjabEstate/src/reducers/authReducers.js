export  const SignInReducer = (state,action) => {
    switch (action.type) {
        case "UPDATE_SIGIN_IN":
            return {
                userToken: action.payload.userToken
            }
        default:
            return state
    }
}