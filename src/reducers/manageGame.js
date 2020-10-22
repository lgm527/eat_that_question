export default function manageGame(state = {
    playing: false,
    trivia: [],
    index: 1,
    score: 0,
}, action) {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                playing: true
            }
        case 'NEXT_Q_RIGHT_A':
            return {
                ...state,
                index: state.index+1,
                score: state.score+1
            }
        case 'NEXT_Q':
            return {
                ...state,
                index: state.index+1
            }
        case 'GAME_OVER':
            return {
                ...state,
                playing: false
            }
        default: 
            return state;
    }
}