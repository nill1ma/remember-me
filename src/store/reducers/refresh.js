
const INITIAL_STATE = {
    data: false
};

function refresh(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_REFRESH":
            return { ...state, data: action.updated };
        default:
            return state;
    }
}

export { refresh };

