import {
  RECIEVE_POSTS,
  REQUEST_POSTS
} from '../actions/posts'

export default function postsReducer(state = {
  posts: [],
  requestingPosts: false
}, action) {

  switch (action.type) {
  case REQUEST_POSTS: {
    return Object.assign({}, state, { requestingPosts: true })
  }

  case RECIEVE_POSTS: {
    return Object.assign({}, state, {
      posts: action.posts,
      requestingPosts: false
    })
  }

  default:
    return state
  }
}
