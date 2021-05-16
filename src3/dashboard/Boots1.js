import {Button, Collapse, Fade , ResponsiveEmbed,Table  } from "react-bootstrap";
import {ProgressBar, Spinner } from "react-bootstrap"
import { Toast  } from "react-bootstrap";
import useState from "react";
export default function Boots1(){
	
	return(

		<>
		
		</>
	)
}




function Tables(){
	return(
		<Table striped bordered hover size="sm" variant="dark" responsive>
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>First Name</th>
		      <th>Last Name</th>
		      <th>Username</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>1</td>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		    </tr>
		    <tr>
		      <td>2</td>
		      <td>Jacob</td>
		      <td>Thornton</td>
		      <td>@fat</td>
		    </tr>
		    <tr>
		      <td>3</td>
		      <td colSpan="2">Larry the Bird</td>
		      <td>@twitter</td>
		    </tr>
		  </tbody>
		</Table>
	)
}

//table => responsive="xl",lg,md,sm, responsive
//td => colSpan='2'
//table =>striped bordered hover variant="dark" size="sm"


function SpinarProgress(){
	let now = 60;
	return(
		<>

		<Button variant='success' > 
			 <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
		</Button>
		<Spinner animation="grow" variant="info"  size="sm" />
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" role="status">
		  <span className="sr-only">Loading...</span>
		</Spinner>
		<ProgressBar>
			  <ProgressBar striped variant="success" now={35} key={1} />
			  <ProgressBar variant="warning" now={20} key={2} />
			  <ProgressBar striped variant="danger" now={10} key={3} />
		</ProgressBar>
		<ProgressBar now={now} label={`${now}%`} srOnly variant="info" striped animated  />


		</>
	)
}














function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onEnter={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Toggle text
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
    </>
  );
}


