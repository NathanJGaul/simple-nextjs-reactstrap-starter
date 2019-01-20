import React from 'react';
import { Container } from 'reactstrap';

import NoteList from '../components/NoteList';
import uuid from '../utils/uuid';

class Index extends React.Component {
  state = {
    notes: [
      { id: 1, text: 'pick up new book' },
      { id: 2, text: 'go to the gym' }
    ]
  };

  genNewNote = text => {
    const id = uuid();
    this.setState(state => ({ notes: [...state.notes, { id, text }] }));
  };

  render() {
    const { notes } = this.state;
    return (
      <Container className="p-5">
        <NoteList notes={notes} newNoteHandler={this.genNewNote} />
      </Container>
    );
  }
}

export default Index;
