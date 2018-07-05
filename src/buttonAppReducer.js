import { INCREMENT } from './actionCreators';

const buttonApp = (state=0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default buttonApp;