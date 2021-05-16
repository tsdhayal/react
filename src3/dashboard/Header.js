import { Button,Media, Container, Row, Col } from 'react-bootstrap';
export default function Header(){
	return(
		<div>
			<Button variant="primary">Primary</Button>
			
			<Button variant="outline-primary">Primary</Button>
			
			<Button  as="input" type="reset" value="Reset" />
			<Container className='bg-primary'  fluid>
			  <Row>
			    <Col className='btn-secondary'>1 of 1</Col>
			  </Row>
			</Container>

		</div>
	)
}

// secondary , success warning , danger, info, dark light, link {or href="#"}
//outline-primary,-secondary,-success,-warning,-danger,-info, -light,-dark
//as='input' value='submit' type='sumbit'
// size='lg,sm,'
//block [for full width]
//active
//disabled

//class/align-self-start, -center, right
// <Media as='li'><img> /<Midia.Body><h3></h3><p></p></Media.Body></Media>


//fluid='sm, md, lg, xl'

//xs={6} , sx, xs={6}
// lg='2' md='auto'
//sm={4} lg={true}
//xs={{ order: 12 }} order: -1 order: 'first' order: 'last'
//md={{ span: 3, offset: 3 }}

// in row
// xs={2} md={4} lg={6}


//mb-3, ml-3,mr-0,mt-1