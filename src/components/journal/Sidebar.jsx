import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../actions/notes'
import JournalEntries from './JournalEntries'

const Sidebar = function() {
  const { name } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleAddNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <aside className="journal_sidebar">
      <h4 className="">{name}</h4>
      <div className="journal_sidebar-navbar">
        <h3 className="">
          <i className="fas fa-bars" />
          <span> Entries</span>
        </h3>
        <button type="button" className="btn" onClick={handleAddNewNote}>
          <i className="far fa-calendar-plus fa-2x" style={{ color: 'orange' }} />
        </button>
      </div>

      <JournalEntries />
    </aside>
  )
}

export default Sidebar
