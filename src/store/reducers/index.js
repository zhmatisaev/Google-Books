import { SEARCH_BOOKS } from "../actions";

const initialState = {
  maxResults: 10,
  startIndex: 1,
  query: "",
  loading: false,
  cards: [],
};

export const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
