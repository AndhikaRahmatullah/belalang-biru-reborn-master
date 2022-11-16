import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBg1z8ih8U-nRbQaia8tdVhRQr-mNIJF1E",
	authDomain: "db-belalang-biru.firebaseapp.com",
	databaseURL: "https://db-belalang-biru-default-rtdb.firebaseio.com",
	projectId: "db-belalang-biru",
	storageBucket: "db-belalang-biru.appspot.com",
	messagingSenderId: "151907527276",
	appId: "1:151907527276:web:902ca52c0304eed6048649",
	measurementId: "G-RTYXYD8DRQ"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export default db;