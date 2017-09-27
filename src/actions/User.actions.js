import axios from 'axios';

export function getValue() {
  return {
    type: "GET_VALUE",
    payload: axios.get("http://localhost/test/getjs.php")
  }
}


export function setValue(name) {
  return {
    type: "SET_VALUE",
    payload: axios.post('http://localhost/test/getjs.php', {
      name: name
    })
  }
}
