export function addCounter(val) {
  return {
    type: "ADD",
    payload: val
  }
};

export function delCounter(val) {
  return {
    type: "SUB",
    payload: val
  }
};
