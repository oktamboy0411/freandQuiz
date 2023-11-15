import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth"

export async function signInWithEmailAndPasswordCustom(email:string , password: string){
    try {
        const data = await signInWithEmailAndPassword(auth , email , password);
        console.log(data);
    } catch (error) {
        console.error(error);  
    }
}