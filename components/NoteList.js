import React from 'react';

import Note from './Note';
import NewNoteButton from './NewNoteButton';

const NoteList = ({ notes, newNoteHandler }) => (
  <>
    {notes.map(note => (
      <Note key={note.id} text={note.text} />
    ))}
    <NewNoteButton newNoteHandler={newNoteHandler} />
  </>
);

export default NoteList;
