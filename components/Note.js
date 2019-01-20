import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

const Note = ({ text }) => (
  <Card>
    <CardBody>
      {text}
      <Button close />
    </CardBody>
  </Card>
);

export default Note;
