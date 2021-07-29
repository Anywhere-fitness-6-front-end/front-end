import {
  DELETE_CLASS,
  ADD_CLASS,
  EDIT_CLASS,
  BOOK_CLASS,
  SEARCH_CLASS_LIST,
  FETCH_CLASS_START,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAIL
} from "../actions/classActions";


const initialState = {
  classListData: {
    id: "",
    name: "",
    classTime: "", 
    classDate: "", 
    duration: "", 
    classType: "", 
    intensityLevel: "",
    location: "",
    instructor: "",
    spots: "",
  },
  isFetching: false,
  error: "",
  value: "",
  classes: []
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
    case SEARCH_CLASS_LIST: {
        const {value} = action;
        const classes = state.classListData.filter((val) => val.includes(value));
        return {...state, value, classes}
      }
    case FETCH_CLASS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classListData: action.payload,
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
