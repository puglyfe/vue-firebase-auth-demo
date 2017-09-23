import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const db = app.database();

const authUiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: 'select_account',
      },
    },
  ],
};

const authUi = new firebaseui.auth.AuthUI(auth);

export default app;
export { auth, authUi, authUiConfig, db };
