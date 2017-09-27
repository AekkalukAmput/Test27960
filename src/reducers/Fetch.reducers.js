const FetchReducer = (state = {
reFetch:[]
},action) =>{
  switch(action.type) {
    case "FETCH_REAL":
    state={
      ...state,
      reFetch : action.payload
    };
    case "FETCH_REAL_FULFILLED":
    state={
      ...state,
      reFetch : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default FetchReducer;
