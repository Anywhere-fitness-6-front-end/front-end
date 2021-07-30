import {
  DELETE_CLASS,
  ADD_CLASS,
  EDIT_CLASS,
  CLASS_EDITED,
  BOOK_CLASS,
  SEARCH_CLASS_LIST,
  FETCH_CLASS_START,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAIL,
  DECREASE_CLASS_SPOTS
} from "../actions/classActions";


const initialState = {
      classListData: {
      activity_name: "",
      address: "",
      available_slots: "",
      class_id: "",
      class_name: "",
      class_time: "",
      created_at: "",
      duration: "",
      instructor_id: "",
      intensity: "",
      max_size: "",
      updated_at: ""
  },
  isFetching: false,
  error: "",
  value: "",
  classes: [],
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
        classListData: [
          ...state.classListData,
          { ...action.payload.createdClass },
        ],
      };
    case CLASS_EDITED:
      console.log(state.classListData)
      return {
        ...state,
        classListData: state.classListData.map((item) => {
          return item.class_id === action.payload.updatedClass.class_id
            ? action.payload.updatedClass
            : item;
        }),
      };
    case BOOK_CLASS:
      return {
        ...state,
        class: [...state.class, { ...action.payload }],
      };
    case SEARCH_CLASS_LIST: {
      const { value } = action;
      const classes = state.classListData.filter((val) => val.includes(value));
      return { ...state, value, classes };
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
    case DECREASE_CLASS_SPOTS:
      return {
        ...state,
        classListData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
