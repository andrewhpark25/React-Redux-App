
const initialState = {
    message: [],
    isFetching: false,
    error: ''
  };
  
  export const dogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DOG_DATA':
        return {
          ...state,
          isFetching: true
        };
      case 'FETCH_DOG':
        return {
          ...state,
          isFetching: false,
          message: action.payload,
          error: ''
        };
      case 'FETCH_DOG_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  