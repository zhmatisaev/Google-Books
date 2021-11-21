export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const BOOKS = "BOOKS";
export const CARDS = "CARDS";

export const search_books = (text) => {
  return {
    type: SEARCH_BOOKS,
    text,
  };
};

export const books = (items) => {
  return {
    type: BOOKS,
    items,
  };
};

export const cards = (items) => {
  return {
    type: CARDS,
    items,
  };
};
