import { combineReducers } from "redux";

import favoritesReducer from "./favoriteList";
import moviesReducer from "./moviesListM";

export default combineReducers({
    fav: favoritesReducer,
    movs: moviesReducer
})

