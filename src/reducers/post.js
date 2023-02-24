
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_CREATE_RESET,
  POST_CREATE_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_LIST_ADDITION,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAIL
} from '../constants/actionType'

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] }
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts
      }
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload }

    case POST_LIST_ADDITION:
      console.log(action.payload.posts)
      return { posts: [...state.posts, action.payload.data.posts] }

    case POST_LIKE_SUCCESS:
      return state.posts.map(post => post._id === action.payload._id ? action.payload : post)

    case POST_LIKE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const intialState = [];
export const postCreateReducer = (state = { post: [], success: false }, action) => {
  switch (action.type) {
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload, posts: [action.payload, ...state.post] }

    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case POST_CREATE_RESET:
      return []

    default:
      return intialState

  }
}