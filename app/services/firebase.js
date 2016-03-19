import Firebase from 'firebase'

class FirebaseService {
  constructor() {
    this.rootRef = new Firebase('https://carlosionicapp.firebaseio.com')
  }
}

export default new FirebaseService()
