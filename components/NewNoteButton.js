import React from 'react';
import {
  Card,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';

class NewNoteButton extends React.Component {
  state = { modalOpen: false, newNoteText: '' };

  toggleModal = () => {
    this.setState(state => ({ modalOpen: !state.modalOpen }));
  };

  addNote = () => {
    const { newNoteText } = this.state;
    const { newNoteHandler } = this.props;
    this.setState({
      modalOpen: false,
      newNoteText: ''
    });
    newNoteHandler(newNoteText);
  };

  addNoteCancel = () => {
    this.setState({
      modalOpen: false,
      newNoteText: ''
    });
  };

  newNoteTextChangehandler = event => {
    this.setState({ newNoteText: event.target.value });
  };

  render() {
    const { modalOpen, newNoteText } = this.state;
    return (
      <>
        <Card>
          <Button color="dark" onClick={this.toggleModal}>
            +
          </Button>
        </Card>
        <Modal isOpen={modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>new note</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              value={newNoteText}
              onChange={this.newNoteTextChangehandler}
              name="newnotetext"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.addNote}>
              add note
            </Button>
            <Button color="light" onClick={this.addNoteCancel}>
              cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default NewNoteButton;
