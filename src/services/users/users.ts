import { collection, getDocs } from "firebase/firestore";
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
}