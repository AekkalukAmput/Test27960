
const initialState = {
  name: "ruj",
  pending: false,
  err: '',
  completed: false
}

const userReducers = (state = initialState, action) => {
  switch(action.type){
    case "SET_NAME_PENDING":
      break;
    case "SET_NAME_REJECTED":
      break;
    case "SET_NAME_FULFILLED":
      break;

    case "GET_NAME_PENDING":
      break;
    case "GET_NAME_FULFILLED":
      state = {
        ...state,
        name: action.payload.data.name,
        pending: false,
        err: '',
        completed: true
      }
      break;
    case "GET_NAME_REJECTED":
      console.log(action);
      state = {
        ...state,
        pending: false,
        err: action.error,
        completed: false
      }
      break;
    default:
      break;
  }
  return state;
}

export default userReducers;
