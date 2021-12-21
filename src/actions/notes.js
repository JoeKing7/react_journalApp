import Swal from 'sweetalert2/dist/sweetalert2.all'
import { DB } from '../firebase/firebaseConfig';
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

      await DB.collection(`${uid}/journal/notes`).add(newNote);
      dispatch(activeNote(uid, newNote));
    } catch (error) {
      console.error(error);
    }
  };
};

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