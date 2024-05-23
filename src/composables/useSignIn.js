import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import {signInWithEmailAndPassword, updateProfile} from "firebase/auth"

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  isPending.value = true;
  error.value = null;

  try {
    const response = await signInWithEmailAndPassword(projectAuth, email, password);
    if (!response) throw new Error("Could not found user!");
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
