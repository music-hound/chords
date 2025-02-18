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

function favoriteChords(state=[],action){
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            return state.includes(action.chord)
            ? state.filter(chord => chord !== action.chord)
            : [...state, action.chord];
        default:
            return state
    }
}

function scrollPosition(state = 0, action) {
    switch (action.type) {
        case "SET_SCROLL_POSITION":
            return action.payload;
        default:
            return state;
    }
}

const reducer = combineReducers({
    isLight,
    keyNote,
    favoriteChords,
    scrollPosition,
  });
  
  export default reducer;