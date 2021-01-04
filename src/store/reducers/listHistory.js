
const INITIAL_STATE = {
    data: [
        {
            name: '',
            date: '',
            time: ''
        }
    ]
};

function listHistory(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_HISTORY":
            return { ...state, data: [...action.updated] };
        default:
            return state;
    }
}

export { listHistory };

