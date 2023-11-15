import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"

export async function createUserWithEmailAndPasswordCustom(email:string , password: string){
    try {
        const data = await createUserWithEmailAndPassword(auth , email , password);
        console.log(data);
    } catch (error) {
        console.error(error);
        
    }
}

