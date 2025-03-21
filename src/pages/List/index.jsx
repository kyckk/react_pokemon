import Card from "../../component/PokeCard";
import Page from "../../component/Page";
import PokemonNavbar from "./pokemonNavbar";
import PokemonApi from "../../api/PokemonApi";
import React from "react";

class List extends React.Component {
  componentDidMount() {
    this.fetch();
  }
  async fetch() {
    try {
      const pokemonList = await PokemonApi.PokemonList();
      const result = await PokemonApi.PokemonName();
      console.log(pokemonList);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <Page header={<PokemonNavbar />}>
        <Card
          data={[
            { id: "1", title: "주문일시", text: "하이이" },
            { id: "2", title: "주문번호", text: "하ㅏ이" },
            { id: "3", title: "주문일시", text: "하이이" },
            { id: "4", title: "주문번호", text: "하ㅏ이" },
            { id: "5", title: "주문일시", text: "하이이" },
            { id: "6", title: "주문번호", text: "하ㅏ이" },
          ]}
        ></Card>
      </Page>
    );
  }
}

export default List;
