import { combineReducers } from "@reduxjs/toolkit";
const deviceTheme = window.matchMedia('(prefers-color-scheme:light)').matches

function isLight(state=deviceTheme, action){
    switch (action.type) {
        case 'TOGGLE_THEME':
            return !state
        default:
            return state
    }
}

const reducer = combineReducers({
    isLight,
  });
  
  export default reducer;