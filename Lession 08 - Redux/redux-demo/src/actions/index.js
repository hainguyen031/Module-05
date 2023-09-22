import uuidv4 from 'uuid/v4';
import { ADD_POST, DELETE_POST } from './types';

export const createPost = title => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    title
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});