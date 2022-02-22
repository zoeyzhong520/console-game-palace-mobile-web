import * as actionTypes from './actionTypes'

const defaultState = {
    tabBarShowFlag: true,
}

const reducer = (state = defaultState, action) => {
    console.log(JSON.stringify(action));
    switch (action.type) {
        case actionTypes.ADD_TABBARSHOWFLAG:
            return {
                ...state,
                tabBarShowFlag: action.tabBarShowFlag
            }
        default:
            return state
    }
}

export default reducer
