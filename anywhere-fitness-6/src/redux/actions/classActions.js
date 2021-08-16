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
export const CLASS_DELETED = "CLASS_DELETED";
export const CLASS_BOOKED = "CLASS_BOOKED";

export const deleteClass = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`classes/${id}`)
      .then((res) => {
        dispatch(classDeleted(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }; 
};

export const classDeleted = (id) => {
  return { type: CLASS_DELETED, payload: id };
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

export const classAdded = (newClass) => {
  return { type: CLASS_ADDED, payload: newClass };
};

export const editClass = (id, editedClass) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`classes/${id}`, editedClass)
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


export const bookClass = (id, class_id) => {
  console.log("bookclass action", id);
  return (dispatch) => {
    axiosWithAuth()
      .post(`/enroll/${class_id}`)
      .then((res) => {
      console.log(res.data.message);
      dispatch(classBooked(id))
      })
      .catch((err) => {
        console.log("Error message", err);
      });
  };
};

export const classBooked = (class_id) => {
  return { type: CLASS_BOOKED, payload: class_id}
}

export function searchClassList(value) {
  return { type: SEARCH_CLASS_LIST, value };
}

export const getClassList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CLASS_START });
    axiosWithAuth()
      .get("classes")
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

