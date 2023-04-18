import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase-config";


export const getUserAction=(uid)=>async(dispatch)=>{
  try{
    //get user id from firebase
    const userRef=doc(db,"users", uid);

    const docSnap=await getDoc(userRef);
  }
}


//create new user
export const loginUser = async (data) => async(dispatch)=>{
  try {
    
    const pendingUser = signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
   toast.promise(pendingUser,{
    pending:"please wait..."
   })

   const {user}=await pendingUser;

   if (user.uid){
    dispatch()
   }
 
  } catch (error) {
    toast.error(error.message);
  }
};
