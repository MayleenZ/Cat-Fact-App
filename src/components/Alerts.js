import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function AlertCats() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You like cats!</Alert.Heading>
        <p>
          Dont forget to donate to  <a href = "https://www.paypal.com/paypalme/animalproject" target = "_blank" rel="noreferrer" >Animal Project NYC</a>
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertCats;