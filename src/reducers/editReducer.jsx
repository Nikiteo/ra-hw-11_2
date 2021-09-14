import { EDIT_FETCH_CHANGE, EDIT_FETCH_SAVE, EDIT_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  editPosts: {
    name: '',
    price: '',
    content: '',
  }
}

export const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FETCH_SUCCESS:
      return { ...state, editPosts: action.payload }
    case EDIT_FETCH_CHANGE:
      const { name, value } = action.payload;
      const { editPosts } = state;
      return {
        ...state,
        editPosts: {
          ...editPosts,
          [name]: value,
        }
      };
    case EDIT_FETCH_SAVE:
      return {...initialState}
    default: return state
  }
}