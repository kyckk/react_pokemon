import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  {Image}  from 'react-bootstrap';
import pokemonlogo from '../../images/pokemonlogo.png'
const pokemonNavbar = () =>{
    return(
      <Navbar className="bg-body-#dc3545 justify-content-between mb-4  bg-primary 
      ">
      <Form inline>
        <Image src={pokemonlogo} style={{ height: '50px', objectFit: 'cover' }} ></Image>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    );
    
}
export default pokemonNavbar;