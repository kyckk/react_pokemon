import Card from "../../component/PokeCard";
import Page from "../../component/Page";
function List() {
  return (
    
    <Page>
      
      <Card
        data={[
          {id:"1" ,term: "주문일시", description: "하이이" },
          { id:"2", term: "주문번호", description: "하ㅏ이" },
        ]}
      ></Card>
    </Page>
  );
}

export default List;
