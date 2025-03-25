import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
// import abc from "../images/abc.png";
import PokeMonModal from "./Modal";
import RadarChartComponent from "./RadarChart";
const PokeCard = ({ header, data = [], footer ,radar}) => {
  return (
    <div>
      {header && <header>{header}</header>}
      <div class="row row-cols-1 row-cols-md-3 g-3">
        {data.map((item,index) => (
        <div className="container">
          <div class="col mb-3">
            <div key={index} class="card h-100">
              <Card>
                <Card.Img variant="top" style={{ height: '250px' }}src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.koreanName}</Card.Text>
                  <PokeMonModal/>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        ))}
      </div>
     
      {footer && <footer>{footer}</footer>}
      {radar&& <RadarChartComponent />}
     
    </div>
    
  );
};
export default PokeCard;
