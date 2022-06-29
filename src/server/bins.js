import {
    initializeApp
} from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8ghdQPhDZEnfQCoAcg7TQk-A-Tu54_3g",
    authDomain: "db-test-817e5.firebaseapp.com",
    projectId: "db-test-817e5",
    storageBucket: "db-test-817e5.appspot.com",
    messagingSenderId: "555402999135",
    appId: "1:555402999135:web:dc5330266a23a0cc40f2ea"
};

initializeApp(firebaseConfig);
const db = getFirestore()

const colRef = collection(db, "bins")

const docs = getDocs(colRef)

export default docs