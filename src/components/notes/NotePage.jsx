import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar'

const NotePage = () => {
    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;

    const activeId = useRef(note.id);
    
    useEffect(() => {
       if (note.id !== activeId.current) {
           reset(note);
           activeId.current = note.id;
       }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch])

    const handleDelete = () => {
      dispatch(startDeleting(id));
    }

    return (
        <div className="notes_main-content">
            <NotesAppBar></NotesAppBar>

            <div className="notes_content">
                <input type="text" className="notes_title-input" name="title" placeholder="Some awesome title" onChange={handleInputChange} value={title}/>
                <textarea name="body" id="" cols="30" rows="10" className="notes_textarea" placeholder="What happen today" onChange={handleInputChange} value={body}></textarea>
                {
                    (note.url)
                    &&
                    <div className="notes_image">
                        <img src={note.url} alt="image" width="150px"/>
                    </div>
                }
            </div>
            <button className='btn btn-danger' onClick={ handleDelete }>
                Delete
            </button>
        </div>
    )
}

export default NotePage
