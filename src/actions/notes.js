import Swal from 'sweetalert2/dist/sweetalert2.all'
import { DB } from '../firebase/firebaseConfig';
import { FILE_UPLOAD } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';


export const startNewNote = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
      };

      const doc = await DB.collection(`${uid}/journal/notes`).add(newNote);
      dispatch(activeNote(doc.id, newNote));
      dispatch(addNewNote(doc.id, newNote));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note
  }
})

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const starLoadingNotes = ( uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})

export const startSaveNote = ( note ) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    await DB.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore))
    Swal.fire({
      icon: 'success',
      title: 'Note saved',
      text: 'Saved successfully'
    })
  }
}

export const refreshNote = ( id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})

export const startUploading = ( file ) => {
  return async ( dispatch, getState ) => {
    const { active:activeNote } = getState().notes;

    Swal.fire({
      title: 'Uploading file...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    })
    const FILE_URL = await FILE_UPLOAD(file);
    activeNote.url = FILE_URL;
    dispatch( startSaveNote( activeNote ) );
    Swal.close();
  }  
}

export const startDeleting = ( id ) => {
  return async ( dispatch, getState ) => {
    const uid = getState().auth.uid;
    await DB.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  }
}

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
})

export const noteLogout = () => ({
  type: types.notesLogoutCleaning
})