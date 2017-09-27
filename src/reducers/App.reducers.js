const appReducer = (state = 0, action) => {
  switch(action.type) {
    case "ADD":
      state += action.payload;
      break;
    case "SUB":
      state -= action.payload;
      break;
    default:
      break;
  };
  return state;
};

export default appReducer;
