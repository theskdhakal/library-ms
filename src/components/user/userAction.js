import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase-config";

export const loginUser = async ({ email, password }) => {
  try {
    //check with auth service
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    //get user from firestore service

    //mount user to redux
  } catch (error) {
    toast.error(error.message);
  }
};
