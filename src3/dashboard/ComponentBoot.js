import { Button,Media, Container, Row, Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useState } from "react";

export default function ComponentBoot(){
	function CloseSet(){
		alert("ready to close");
		//this.style.display = 'none';
	}
	const [show, setShow] = useState(true);
	function setShows(){

	}
	return(
		<div>
		<Allerts />
		<Allerts2 />
			<Alert variant='danger' dismissible onClick={CloseSet} onClose={() => setShow(false)} >
				<Alert.Heading>Alerts </Alert.Heading>
				<hr/>
				<p> This Waring </p>
				<Button onClick={() => setShows(false)} variant="outline-success" > Close me </Button>
			</Alert>
			<Alert variant='success'>This is a Alerts!</Alert>
			<Alert variant='info'><Alert.Link href="#">an example link</Alert.Link></Alert>

		</div>
	)
}

function Allerts(){
	const [show, setShow] = useState(true);

	if (show) {
	return (
	  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
	    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
	    <p>
	      Change this and that and try again. Duis mollis, est non commodo
	      luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
	      Cras mattis consectetur purus sit amet fermentum.
	    </p>
	  </Alert>
	);
	}
	return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

function Allerts2(){
	const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}
//
//d-flex justify-content-end