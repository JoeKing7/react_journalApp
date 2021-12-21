import React from 'react'
import { DateTime } from 'luxon'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({id, date, title, body, url}) => {
    const noteDate = new DateTime(date);
    const dispatch = useDispatch();
    const note = {
        id,
        title,
        body,
        date,
        url
    }
    const handleNoteClick = () => {
        dispatch(activeNote(id, note));
    }

    return (
        <div className="journal_entry pointer" id={id} onClick={handleNoteClick}>
            {
                url ?
                <div 
                    className="journal_entry-image" 
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                ></div>
                :
                <div className="journal_entry-image" >
                    <i className="fas fa-thumbtack"></i>
                </div>
                
            }
                
            <div className="journal_entry-body">
                <div className="journal_entry-title">{title}</div>
                <div className="journal_entry-content">{body}</div>
            </div>
            <div className="journal_entry-date">
                <span>{noteDate.toFormat('LLL yy')}</span>
                <h4>{noteDate.toFormat('dd ccccc')}</h4>
            </div>
        </div>
    )
}

export default JournalEntry
