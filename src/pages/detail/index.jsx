import Page from "../../component/Page";
import PokemonNavbar from "../../component/pokemonNavbar";
import React from "react";
import RadarChartComponent from "../../component/RadarChart";
import PokemonSelect from "./PokemonSelect";
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 추가
import PokemonApi from "../../api/PokemonApi";
import PokeCard from "../../component/PokeCard";

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
        <div>
          <PokeCard
            data={this.state.createArray}
          ></PokeCard>
        </div>
      </Page>
    );

  }
  
};
export default Detail;
