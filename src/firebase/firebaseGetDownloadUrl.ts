import { getDownloadURL, ref } from "firebase/storage";
import storage from "./firebaseConfig";

export const getDownloadURLImage = (data: string, setFunc: (url: string) => void) => {
    if(data != null) {
        getDownloadURL(ref(storage, data))
        .then((url) => {
            setFunc(url);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}