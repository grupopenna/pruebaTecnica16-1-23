import {

} from "./action-type";

const initialState = {

  movements: [],
  registers: []

};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    default:
    return { ...state};
  }
};

export default reducer;