import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import PokeMonModal from "./Modal";
import RadarChartComponent from "./RadarChart";
import CardSkeleton from "../component/CardSkeleton";
import "../static/Main.css"
const PokeCard = ({ header, data = [], footer, radar }) => {
  console.log(data);

  // if (data.length === 0) {

  //   return (
  //     <div className="card_container">
  //           {
  //             [...Array(9)].map((_, i) => (

  //               <div key={i} class="m-5 mt-3" style={{height:"250px"}}>
  //               <CardSkeleton />
  //             </div>
  //             ))
  //           }

  //     </div>      

  //   ) ;
  // }
  return (
    <div>
      {header && <header>{header}</header>}

      <div className="card_container">
        {data && data.length > 0 ? data.map((item, index) => (
          item &&
          <div class="m-5 mt-3">
            <div key={index} class="card h-100">
              <Card>
                <Card.Img variant="top" style={{ height: '250px' }} src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.koreanName}</Card.Text>
                  <PokeMonModal />
                </Card.Body>
              </Card>
            </div>

          </div>
        )) :
          [...Array(20)].map((_, i) => (

            <div key={i} class="m-5 mt-3" style={{ height: "250px" }}>
              <CardSkeleton />
            </div>
          ))

        }

      </div>


      {footer && <footer>{footer}</footer>}
      {radar && <RadarChartComponent />}

    </div>

  );
};
export default PokeCard;
