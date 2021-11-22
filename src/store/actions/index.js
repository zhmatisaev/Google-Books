export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const QUERY = "QUERY";
export const CARDS = "CARDS";

export const search_books = (text) => {
  return {
    type: SEARCH_BOOKS,
    payload: text,
  };
};

export const query = (text) => {
  return {
    type: QUERY,
    payload: text,
  };
};

export const cards = (items) => {
  return {
    type: CARDS,
    items,
  };
};
