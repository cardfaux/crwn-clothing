import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAB7JMMZhN9em_c2npHHECbHCNd3X4KP-g',
	authDomain: 'cannat-6ce91.firebaseapp.com',
	databaseURL: 'https://cannat-6ce91.firebaseio.com',
	projectId: 'cannat-6ce91',
	storageBucket: 'cannat-6ce91.appspot.com',
	messagingSenderId: '127650905507',
	appId: '1:127650905507:web:d5b813fb07515e4bc52e16'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
