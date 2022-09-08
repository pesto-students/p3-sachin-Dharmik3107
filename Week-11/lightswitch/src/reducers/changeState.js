const actions = {
    change:'CHANGE_THEME'
}

const changeState = (state=false,action) => {
    switch(action.type){
        case actions.change: return state = action.payload;
        default: return state;
    }
}

export default changeState;