import axiosWithAuth from "../../utils/axiosWithAuth";
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
export const CLASS_ADDED = "CLASS_ADDED";
export const CLASS_EDITED = "CLASS_EDITED";

export const deleteClass = (id) => {
  return { type: DELETE_CLASS, payload: id };
};

export const addClass = (newClass) => {
  return (dispatch) => {
    axiosWithAuth()
    .post("https://infinite-anchorage-25635.herokuapp.com/classes", newClass)
    .then((res) => {
      dispatch(classAdded(res.data))
    })
    .catch(err => {
      console.log(err)
  })
  } 
};


export const editClass = (id, editedClass) => {
  return (dispatch) => {
    axiosWithAuth()
      .patch("with id", editedClass)
      .then((res) => {
        dispatch(classEdited(res.data));
      })
      .catch((err) => {
        console.log("edit class error -> ", err);
      });
  };
};

export const classEdited = (editedClass) => {
  return { type: CLASS_EDITED, payload: editedClass };
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
    axiosWithAuth()
      .get("classes")
      .then((res) => {
        console.log(res)
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

export const fetchClassSuccess = (classListData) => {
  return {
    type: FETCH_CLASS_SUCCESS,
    payload: classListData,
  };
};

export const fetchFail = (error) => {
  return {
    type: FETCH_CLASS_FAIL,
    payload: error,
  };
};

export const decreaseClassSpots = (available_slots) => {
  return {
    type: DECREASE_CLASS_SPOTS,
    payload: available_slots - 1,
  };
};

export const increaseClassSpots = (count) => {
  return {
    type: DECREASE_CLASS_SPOTS,
    payload: count,
  };
};

export const classAdded = (newClass) => {
  return { type: CLASS_ADDED, payload: newClass };
};
