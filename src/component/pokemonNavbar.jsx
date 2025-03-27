import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import pokemonlogo from '../images/pokemonlogo.png';
import '../static/Nav.css';
const pokemonNavbar = () => {
  return (

    <Navbar className="bg-body-#dc3545 justify-content-between mb-4   
      " style={{ height: '120px', objectFit: 'cover' }}>

      <Form inline className='h-100'>
        <Image src={pokemonlogo} className='h-100' ></Image>
      </Form>
      <div className='container flex-justify-space h-100'>
      <nav id="gnb"  className="">
				<ul className="gnb">
          <div id='horizontal-underline'> 
   
          </div>
					<li class="">
						<a href="/news" class="warning "><i class="icon-news"></i>소식</a>
					</li>
					<li class="">
						<a href="/game" class="primary "><i class="icon-game"></i>게임</a>
					</li>
					<li class="">
						<a href="https://pokemoncard.co.kr/"class="secondary"><i class="icon-card"></i>카드 게임</a>
					</li>
					<li class="">
						<a href="/animation" class="secondary2 "><i class="icon-ani"></i>애니메이션</a>
					</li>
					<li class="">
						<a href="/goods" class="danger "><i class="icon-ball"></i>상품</a>
					</li>
				

 
				</ul>
			</nav>
      </div>
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