import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAsVJXNlh4mNZhghmCMG1KvzjKAxjhFupg",
    authDomain: "myproject-e50f0.firebaseapp.com",
    databaseURL: "https://myproject-e50f0.firebaseio.com",
    projectId: "myproject-e50f0",
    storageBucket: "",
    messagingSenderId: "215754326167"
  };

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}
