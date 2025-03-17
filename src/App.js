
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap'; // 꼭 import를 해와야한다
import { Card, Button } from 'react-bootstrap';

function App() {
  return (
      
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col">
       <div class="card h-100">
            <Card>
              <Card.Img variant="top" src='' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Card text</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    
       </div>
      </div>
      <div class="col">
       <div class="card h-100">
            <Card>
              <Card.Img variant="top" src='' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Card text</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    
       </div>
      </div>
      <div class="col">
       <div class="card h-100">
            <Card>
              <Card.Img variant="top" src='' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Card text</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    
       </div>
      </div>
      <div class="col">
       <div class="card h-100">
            <Card>
              <Card.Img variant="top" src='' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Card text</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    
       </div>
      </div>
    </div>
  );
}

export default App;
