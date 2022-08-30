import React from 'react'
import { useSelector } from 'react-redux'
import NotePage from '../notes/NotePage'
import NothingSelected from './NothingSelected'
import Sidebar from './Sidebar'

const JournalPage = () => {
  const { active } = useSelector((state) => state.notes)

  return (
    <>
      <div className="journal_content">
        <Sidebar></Sidebar>
        <main>
          {active ? <NotePage></NotePage> : <NothingSelected></NothingSelected>}
        </main>
      </div>
      {/* <div className="journal_image">
                <img src="../src/assets/images/calendar_front.png" alt="image"/>
            </div> */}
    </>
  )
}

export default JournalPage
