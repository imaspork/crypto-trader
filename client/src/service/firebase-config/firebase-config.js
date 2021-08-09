import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDxm9NnX6C30FoH5-UEheseceowhp0t63g",
	authDomain: "crypto-trader-e2e28.firebaseapp.com",
	projectId: "crypto-trader-e2e28",
	storageBucket: "crypto-trader-e2e28.appspot.com",
	messagingSenderId: "287781001236",
	appId: "1:287781001236:web:c5608c2e3a8465954f6f01",
	measurementId: "G-44GRQ3VHBT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
