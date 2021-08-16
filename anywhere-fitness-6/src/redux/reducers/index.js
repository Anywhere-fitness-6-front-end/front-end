import {
  DELETE_CLASS,
  ADD_CLASS,
  CLASS_DELETED,
  CLASS_EDITED,
  SEARCH_CLASS_LIST,
  FETCH_CLASS_START,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAIL,
  CLASS_BOOKED
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
  bookedClasses: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CLASS:
      return {
        ...state,
        class: state.class.filter((item) => action.payload !== item.id),
      };

    case CLASS_DELETED:
      return {
        ...state,
        classListData: state.classListData.filter(
          (item) => item.class_id !== action.payload
        ),
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
      return {
        ...state,
        classListData: [...state.classListData, action.payload]
      };

    case CLASS_BOOKED:
      return {
        ...state,
        bookedClasses: [...state.bookedClasses, action.payload]
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
    default:
      return state;
  }
};

export default reducer;
