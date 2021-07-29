import {
  DELETE_CLASS,
  ADD_CLASS,
  EDIT_CLASS,
  BOOK_CLASS,
  FETCH_CLASS_START,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAIL
} from "../actions/classActions";


const initialState = {
  class: {
    id: "",
    name: "",
    classTime: "time", 
    classDate: "date", 
    duration: "30", 
    classType: "as", 
    intensityLevel: "inte",
    location: "loca",
    instructor: "inst",
    spots: 5,
  },
  isFetching: false,
  error: "",
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CLASS:
      return {
        ...state,
        class: state.class.filter((item) => action.payload !== item.id),
      };
    case ADD_CLASS:
      return {
        ...state,
        class: [...state.class, { ...action.payload, id: Date.now() }],
      };
    case EDIT_CLASS:
      return {
        ...state,
        class: [...state.class, { ...action.payload, id: Date.now() }],
      };
    case BOOK_CLASS:
      return {
        ...state,
        class: [...state.class, { ...action.payload, id: Date.now() }],
      };
    case FETCH_CLASS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        person: action.payload,
      };
    case FETCH_CLASS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
