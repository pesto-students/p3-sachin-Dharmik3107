const initialState = {
    count : 0
}
const stepReducer = (state=initialState,action) => {
    switch(action.type){
        case 'add-step': return {count: state.count + 1};
        case 'reset-step': return {count:0};
        default: return state;
    }
}

export default stepReducer