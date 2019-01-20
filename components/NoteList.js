import React from 'react';

import Note from './Note';
import NewNoteButton from './NewNoteButton';

const NoteList = ({ notes }) => (
  <>
    {notes.map(note => (
      <Note key={note.id} text={note.text} />
    ))}
    <NewNoteButton />
  </>
);

export default NoteList;
