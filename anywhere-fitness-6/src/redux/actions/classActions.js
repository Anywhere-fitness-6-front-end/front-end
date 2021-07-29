import axios from "axios";
export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";
export const EDIT_CLASS = "EDIT_CLASS";
export const BOOK_CLASS = "BOOK_CLASS";
export const GET_CLASSES = "GET_CLASSES"
export const FETCH_CLASS_START = "FETCH_CLASS_STAR";
export const FETCH_CLASS_SUCCESS = "FETCH_CLASS_SUCCESS";
export const FETCH_CLASS_FAIL = "FETCH_CLASS_FAIL";

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

export const getClassList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CLASS_START });
    axios.get("class api endpoint")
      .then((res) => {
        console.log(res.data.results[0]);
        dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data.results[0] });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_CLASS_FAIL, payload: err });
      });
  };
};

export const fetchClassStart = () => {
  return ({
    type: FETCH_CLASS_START,
  });
}

export const fetchClassSuccess = (classList) => {
  return ({
    type: FETCH_CLASS_SUCCESS,
    payload: classList
  });
};

export const fetchFail = (error) => {
  return {
    type: FETCH_CLASS_FAIL,
    payload: error,
  };
};