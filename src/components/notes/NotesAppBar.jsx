import React from 'react';
import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handleUploadImage = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const FILE = e.target.files[0];
        if ( FILE ) {
            dispatch(startUploading(FILE));
        }
    }

    return (
        <div className="notes_appbar">
            <span>{ DateTime.now().setLocale('es-CO').toFormat('dd LLLL yyyy') }</span>
            <input type="file" id='fileSelector' name="file" style={{display: 'none'}} onChange={ handleFileChange }></input>
            <div>
                <button className="btn" onClick={handleUploadImage}>Picture</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar
