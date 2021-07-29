import axios from "axios";
export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";
export const EDIT_CLASS = "EDIT_CLASS";
export const BOOK_CLASS = "BOOK_CLASS";
export const SEARCH_CLASS_LIST = "SEARCH_CLASS_LIST";
export const GET_CLASSES = "GET_CLASSES"
export const FETCH_CLASS_START = "FETCH_CLASS_STAR";
export const FETCH_CLASS_SUCCESS = "FETCH_CLASS_SUCCESS";
export const FETCH_CLASS_FAIL = "FETCH_CLASS_FAIL";
export const DECREASE_CLASS_SPOTS = "DECREASE_CLASS_SPOTS";
export const INCREASE_CLASS_SPOTS = "INCREASE_CLASS_SPOTS";


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

export function searchClassList(value) {
  return { type: SEARCH_CLASS_LIST, value };
}

export const getClassList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CLASS_START });
    axios
      .get("/data.json")
      .then((res) => {
        dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data });
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

export const decreaseClassSpots = (count) => {
  return {
    type: DECREASE_CLASS_SPOTS,
    payload: count,
  }
}

export const increaseClassSpots = (count) => {
  return {
    type: DECREASE_CLASS_SPOTS,
    payload: count,
  };
};