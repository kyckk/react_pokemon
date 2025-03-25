import PokeCard from "../../component/PokeCard";
import Page from "../../component/Page";
import PokemonNavbar from "../../component/pokemonNavbar";
import PokemonApi from "../../api/PokemonApi";
import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
    };
  }
  componentDidMount() {
    this.fetch();
  }
  async fetch() {
    try {
      const pokemonList = await PokemonApi.PokemonList();
      this.setState({ pokemonList });
      console.log(pokemonList.sprites.back_default);
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <Page header={<PokemonNavbar />}>
        <PokeCard
          data={this.state.pokemonList}
        ></PokeCard>
      </Page>
    );
  }
}

export default List;
