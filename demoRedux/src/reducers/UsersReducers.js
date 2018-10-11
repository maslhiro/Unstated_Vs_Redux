const appState = {
  isLog_In : false
}

const UsersReducers  = (state = appState, action) => {
    switch (action.type) {
      case 'SET_LOGIN':
        return {
          isLog_In : action.value
        }
      default:
        return state
    }
}
  
export default UsersReducers
