import { ADD_POST, DELETE_POST } from '../actions/types';
import uuidv4 from 'uuid/v4';

let posts = [
  {
    id: uuidv4(),
    title: 'first title'
  },
  {
    id: uuidv4(),
    title: 'second title'
  }
]

export default function postReducer(state = posts, action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
}