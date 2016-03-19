import FirebaseService from '../services/firebase'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'

export function getAllPosts() {
  return dispatch => {
    dispatch({ type: REQUEST_POSTS })

    FirebaseService.rootRef.child('posts').on('value', snapshot => {
      const data = snapshot.val()
      const posts = Object.keys(data).map(id => data[id])
      dispatch({ type: RECIEVE_POSTS, posts })
    })
  }
}
