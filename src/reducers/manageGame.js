export default function manageGame(state = {
    playing: false
}, action) {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                playing: true
            }
        default: 
            return state;
    }
}