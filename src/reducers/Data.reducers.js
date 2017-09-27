const dataReducer = (state = {
  resultDB:[]
},action) => {
  switch (action.type) {
    case "FETCH_DB":
      state = {
        ...state,
        resultDB : action.payload
      };
    case "FETCH_DB_FULFILLED":
      state = {
        ...state,
        resultDB : action.payload
      };
      break;

    default:
      break;
  }
  return state;
};
export default dataReducer
