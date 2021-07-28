import {
  DELETE_CLASS,
  ADD_CLASS,
  EDIT_CLASS,
  BOOK_CLASS,
} from "../actions/classActions";


const initialState = {
  class: {
    ClassTime: "", 
    ClassDate: "", 
    Duration: "", 
    ClassType: "", 
    IntensityLevel: "",
    Location: "",
    Instructor: "",
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
    default:
      return state;
  }
};

export default reducer;
