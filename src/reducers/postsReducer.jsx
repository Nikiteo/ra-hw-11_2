import { FETCH_DELETE, FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  posts: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, posts: action.payload }
    case FETCH_DELETE:
      const { id } = action.payload;
      return {
        ...state,
        posts: state.posts.filter(o => o.id !== id)
      }
    default: return state
  }
}