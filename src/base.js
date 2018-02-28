import Rebase from 're-base';
import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyCtJAZTvCZxnxSR6aBu4XTZ47u7PL35xWg",
	authDomain: "potapanje-brodov.firebaseapp.com",
	databaseURL: "https://potapanje-brodov.firebaseio.com",
};
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }
