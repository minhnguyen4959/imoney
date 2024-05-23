import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import {signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"

const error = ref(null);

async function logout(email, password) {
  error.value = null;

  try {
    const response = await signOut(projectAuth);
    if (!response) throw new Error("Could not found user!");
    return response;
  } catch (err) {
    error.value = err.message;
  } 
}

export function useLogout() {
  return { error, logout };
}
