
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUzfO-E0UWBypffKs2JyA59ItGs1rgbOo",
    authDomain: "test-d2d14.firebaseapp.com",
    databaseURL: "https://test-d2d14.firebaseio.com",
    projectId: "test-d2d14",
    storageBucket: "test-d2d14.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:845490783888:android:94bbf2aec819784bf87a15"
};

firebase.initializeApp(firebaseConfig);

export default firebase;