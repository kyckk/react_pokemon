import Page from "../../component/Page";
import PokemonNavbar from "../../component/pokemonNavbar";
import React from "react";
import RadarChartComponent from "../../component/RadarChart";
import PokemonSelect from "./PokemonSelect";
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 추가
import PokemonApi from "../../api/PokemonApi";
import PokeCard from "../../component/PokeCard";
import "../../static/Main.css"
import Dialog from "../../component/Dialog";
import BackDrop from "../../component/BackDrop";

class Detail extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
      createArray: [],
    };
  }
  
  componentDidMount() {
    this.fetch();
  }
  async fetch() {
    try {
      const createArray = await PokemonApi.createArray();
      this.setState({ createArray });
      console.log(createArray);
    } catch (e) {
      console.error(e);
    }
  }
  render(){

    return (
      <Page header={<PokemonNavbar />}>
        <div style={{ height: "10px",  background:"black"}}></div>
        <div
          className="row justify-content-center align-items-center"
          style={{ maxHeight: "1000px" }}
        > 
         
          
          <div class="col-lg-4">
            <PokemonSelect />
          </div>
          <div class="col-lg-4">
            <RadarChartComponent />
          </div>
        </div>
        <div class="bgLight pt-3" >
          <div>
          <PokeCard
            data={this.state.createArray}
          ></PokeCard>
          </div>
        </div>
        <BackDrop>
          <Dialog />
        </BackDrop>
        
      </Page>
      
    );

  }
  
};
export default Detail;
