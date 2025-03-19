import Card from "../../component/PokeCard";
import Page from "../../component/Page";
import PokemonNavbar from "./pokemonNavbar";


function List() {
  return (
    
    <Page header={<PokemonNavbar/>}>
      
      <Card
        data={[
          {id:"1" ,title: "주문일시", text: "하이이" },
          { id:"2", title: "주문번호", text: "하ㅏ이" },
          {id:"3" ,title: "주문일시", text: "하이이" },
          { id:"4", title: "주문번호", text: "하ㅏ이" },
          {id:"5" ,title: "주문일시", text: "하이이" },
          { id:"6", title: "주문번호", text: "하ㅏ이" },
        ]}
      ></Card>
    </Page>
  );
}

export default List;
