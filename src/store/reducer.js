import * as actionTypes from './actionTypes'

const defaultState = {
    tabBarShowFlag: true,
    banner: [],
    recListType: '',
}

const reducer = (state = defaultState, action) => {
    // console.log(JSON.stringify(action));
    switch (action.type) {
        case actionTypes.ADD_TABBARSHOWFLAG:
            return {
                ...state,
                tabBarShowFlag: action.tabBarShowFlag
            }
        case actionTypes.ADD_BANNER:
            return {
                ...state,
                banner: action.banner
            }
        case actionTypes.ADD_RECLISTTYPE:
            console.log(JSON.stringify(action));
            return {
                ...state,
                recListType: action.recListType
            }
        default:
            return state
    }
}

export default reducer
