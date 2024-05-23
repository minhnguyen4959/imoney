import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
  isPending.value = true;
  error.value = null;

  try {

    //create new user in firebase: check user in authentication firebase
    const response = await createUserWithEmailAndPassword(projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user!");
    await updateProfile(response.user, { displayName: fullName });
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
