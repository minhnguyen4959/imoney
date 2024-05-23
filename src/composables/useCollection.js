import { ref } from "vue";
import { projectAuth, projectFirestore } from "@/configs/firebase";
import {
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const useCollection = (name) => {
  const error = ref(null);
  const addRecord = async (record) => {
    error.value = null;
    try {
      const response = await addDoc(collection(projectFirestore, name), record);
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  };

  return { error, addRecord };
};

export default useCollection;
