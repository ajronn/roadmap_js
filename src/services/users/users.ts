import { collection, getDocs } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { firebase_database } from "../../firebase"
import { USER } from "./models"

export class UsersService {
    static async getUsers() {
        const users: USER[] = []
        const snap = await getDocs(collection(firebase_database, "users"));
        snap.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() } as USER)
        });
        return users;
    }

    static createUser = (email: string, pass: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
            console.log(userCredential.user)
        }).catch(()=>{})
    }

    static login = (email: string, pass: string) => {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth, email, pass)
    }

    static logout = () => {
        const auth = getAuth();
        return signOut(auth)
    }
}