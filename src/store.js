import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";


const feedback = (state={}, action)=>{
    switch(action.type){
        case 'ADD_FEELING':
            return {... state, feeling: Number(action.payload)}
        case 'ADD_UNDERSTANDING':
            return {... state, understanding: Number(action.payload)}
        case 'ADD_SUPPORT':
            return {... state, support: Number(action.payload)}
        case 'ADD_COMMENTS':
            return {... state, comments: action.payload}
        default: 
            return state
    }
}



const store = createStore(
    combineReducers({
        feedback
    }),
        applyMiddleware(
            logger
        )
)

export default store