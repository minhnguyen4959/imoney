import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  if (_user) user.value = _user;
});

const getUser = () => {
    console.log(projectAuth.currentUser);
  return user;
};

export function useUser() {
  return { getUser };
}
