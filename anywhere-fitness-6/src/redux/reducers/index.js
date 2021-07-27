export const initialState = {
  classListData: [],
  isLoading: false,
  errorMessage: "State error message",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLASSLIST_START":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_CLASSLIST_SUCCESS":
      return {
        ...state,
        classListData: action.payload,
        isLoading: false,
        errorMessage: state.errorMessage,
      };

    case "FETCH_CLASSLIST_FAIL":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    case "ADD_CLASS":
      const addNewClass = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        classListData: [...state.classListData, addNewClass],
      };

    case "DELETE_CLASS":
      return {
        ...state,
        classListData: state.classListData.filter(
          (item) => action.payload !== item.id
        ),
      };

    case "BOOK_CLASS":
      return {
        ...state,
        classListData: state.classListData - 1
      };

    default:
      return state;
  }
};

export default reducer;
