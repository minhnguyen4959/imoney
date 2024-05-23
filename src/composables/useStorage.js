import {ref} from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from './useUser';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const {getUser } = useUser();
const user = getUser();
const useStorage = (name) => {
    const error = ref(null);
    const pathFile = ref(null);
    const url = ref(null);

    const uploadFile = async (file) => {
        // => tên db/id user/tên file
        pathFile.value = `${name}/${user.value.uid}/${file.name}`
        console.log(pathFile);
        console.log(projectStorage)
        const fileRef = storageRef(projectStorage, pathFile.value);
        console.log(fileRef)
        error.value = null;
        try {
            const response = await uploadBytes(fileRef, file)
            url.value = await getDownloadURL(response.ref);
            return url.value
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }

    return { url, uploadFile };
} 

export {useStorage}