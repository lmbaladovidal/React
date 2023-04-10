import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firestoreDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //uid
    const { uid } = getState().auth;
    console.log(uid);
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(firestoreDB,`${uid}/journal/notes`))
    const setDocRes = await setDoc(newDoc,newNote);
    console.log({newDoc,setDocRes});
    //dispatch
    //dispatch(newNote)
    //dispatch(activarNote)
  };
};
