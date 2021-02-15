import store from "./store";
import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

export function bugAdded(description) {
  store.dispatch({
    type: BUG_ADDED,
    payload: {
      description: description,
    },
  });
}

export function bugRemoved(id) {
  store.dispatch({
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  });
}
