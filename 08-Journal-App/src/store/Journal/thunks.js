import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firestoreDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote,savingNewNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())
    //uid
    const { uid } = getState().auth;
    console.log(uid);
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(firestoreDB,`${uid}/journal/notes`))
    await setDoc(newDoc,newNote);
    newNote.id = newDoc.id
    //dispatch
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
    //dispatch(activarNote)
  };
};
