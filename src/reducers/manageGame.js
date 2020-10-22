const meat = require('../assets/meat.json');

export default function manageGame(state = {
    playing: false,
    trivia: meat.meat,
    index: 0,
    score: null,
}, action) {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                playing: true,
                score: 0
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
        case 'RIGHT_A':
            return {
                ...state,
                score: state.score+1
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