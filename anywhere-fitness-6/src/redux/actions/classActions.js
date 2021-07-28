export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";
export const EDIT_CLASS = "EDIT_CLASS";
export const BOOK_CLASS = "BOOK_CLASS";

export const deleteClass = (id) => {
  return { type: DELETE_CLASS, payload: id };
};

export const addClass = (id) => {
  return { type: ADD_CLASS, payload: id };
};


export const editClass = (id) => {
  return { type: EDIT_CLASS, payload: id };
};

export const bookClass = (id) => {
  return { type: BOOK_CLASS, payload: id };
};