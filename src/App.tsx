import React, { useState } from 'react'
import StickyNote from './Components/StickyNote'


const App: React.FC = () => {

    const initNoteList = {
        notes: [
            ""
        ]
    }


    const [noteList, preNoteList] = useState<any>(initNoteList.notes)

    const addNewNote: any = () => {
        preNoteList((PrevState: any) => ([...PrevState, ""]))
    }


    return (
        <div>
            <StickyNote addNewNote={addNewNote} noteList={noteList} />
        </div>
    )
}

export default App