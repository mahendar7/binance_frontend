import { BUG_ADDED, BUG_REMOVED, COINS, TOKEN, USER } from "./actionTypes";
export const initialState = {
  basket: [],
  user: null,
  lastId: 0,
  token: null,
  coins: [],
};
// let lastId = 0;

export default function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case USER:
      return {
        ...state,
        user: action.user,
      };

    case BUG_ADDED:
      return {
        ...state,
        token: action,
      };

    case COINS:
      return {
        ...state,
        coins: action.coins,
      };

    // return [
    //   ...state,
    //   {
    //     id: ++state.lastId,
    //     description: action.payload.description,
    //     resolved: false,
    //   },
    // ];

    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
