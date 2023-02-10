
const INITIAL_STATE = {
    theFAvorites: []
  };

  export default function favoritesReducer(state = INITIAL_STATE , action){
    switch(action.type){
        case "SET_FAVORITE":
            return{
                theFAvorites: action.payload
            };
        default:
            return state;
    }
  }