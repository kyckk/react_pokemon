import 'bootstrap/dist/css/bootstrap.min.css';
// import { Image } from 'react-bootstrap'; // 꼭 import를 해와야한다
import { Card, Button } from "react-bootstrap";
import abc from "../images/abc.png"
const PokeCard = ({ header, data = [], footer }) => {
  console.log(data);
  return (
    <div>
      {header && <header>{header}</header>}
      <div class="row row-cols-1 row-cols-md-3 g-3">
      {
        data.map((item)=> (
            
            <div class="col">
            <div  key={item.id} class="card h-100">
              <Card>
                <Card.Img  variant="top" src={abc} / >
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>Card text</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))
      }
      </div>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
export default PokeCard;
