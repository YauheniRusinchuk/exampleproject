import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyefaAsVJXNlh4mNZhghmCMG1KvzjKAdqdqdxjhFupg",
    authDomain: "myproject-e50f0.firebaseapp.com",
    databaseURL: "https://myprojedact-e50f0.firebaseio.com",
    projectId: "myproject-e50fd0",
    storageBucket: "",
    messagingSenderId: "21572554326167"
  };

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}
