
const INITIAL_STATE = {
    data: {
        minute: 0,
        seconds: 0
    }
};

function clock(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_CLOCK":
            return { ...state, data: action.updated };
        default:
            return state;
    }
}

export { clock };

