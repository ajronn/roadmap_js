import { getFirestore } from "firebase/firestore";
import { firebase_app } from "../firebase"

export const firebase_database = getFirestore(firebase_app);