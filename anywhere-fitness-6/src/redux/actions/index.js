import axios from "axios";
export const FETCH_CLASSLIST_START = "FETCH_CLASSLIST_START"
export const FETCH_CLASSLIST_SUCCESS = "FETCH_CLASSLIST_SUCCESS"
export const FETCH_CLASSLIST_FAIL = "FETCH_CLASSLIST_FAIL"
export const ADD_NEW_CLASS = "ADD_NEW_CLASS"
export const DELETE_CLASS = "DELETE_CLASS"
export const EDIT_CLASS = "EDIT_CLASS";
export const BOOK_CLASS = "BOOK_CLASS";


export const getClassList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CLASSLIST_START });
        axios.get("class list url")
        .then(res => {
            dispatch({ type: FETCH_CLASSLIST_SUCCESS, payload:res.data.results to add})
        })
        .catch(err => {
            dispatch({ type: FETCH_CLASSLIST_FAIL, payload: err})
        })
    }
}

export const fetchClassListStart = () => {
    return ({
        type: FETCH_CLASSLIST_START
    });
}

export const fetchClassListSuccess = (classListData) => {
    return ({
        type: FETCH_CLASSLIST_SUCCESS,
        payload: classListData
    });
}

export const fetchClassListFail = (error) => {
    return ({
        type: FETCH_CLASSLIST_FAIL,
        payload: error
    });
}


export const addNewClass = (newClass) => {
  return ({
    type: ADD_NEW_CLASS,
    payload: newClass,
    id: Date.now()
  });
}

export const editClass = (newClass) => {
  return ({
    type: EDIT_CLASS,
    payload: newClass
  });  
}

export const deleteClass = (id) => {
  return ({
    type: DELETE_CLASS,
    payload: id
  });  
}

export const bookClass = (id) => {
  return ({
    type: BOOK_CLASS,
    payload: id
  });  
}