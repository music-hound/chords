import { combineReducers } from "@reduxjs/toolkit";
// const deviceTheme = window.matchMedia('(prefers-color-scheme:light)').matches

function isLight(state=false, action){
    switch (action.type) {
        case 'TOGGLE_THEME':
            return !state
        default:
            return state
    }
}

function keyNote(state='C',action){
    switch (action.type) {
        case 'CHANGE_KEYNOTE':
            return action.keyNote
        default:
            return state
    }
}

const reducer = combineReducers({
    isLight,
    keyNote,
  });
  
  export default reducer;