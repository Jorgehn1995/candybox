import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBbnibU2stgs3STq0qx3vnQ5YtFWZMQPXg",
  authDomain: "candybox-c3e3d.firebaseapp.com",
  projectId: "candybox-c3e3d",
  storageBucket: "candybox-c3e3d.appspot.com",
  messagingSenderId: "598213657165",
  appId: "1:598213657165:web:f140a764a6d5ff813fd204",
  databaseURL: "https://candybox-c3e3d-default-rtdb.firebaseio.com",
  measurementId: "G-T5T33NW8G3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const storage = firebase.storage();

export { firebase, storage, db };
