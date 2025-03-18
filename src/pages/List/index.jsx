import Card from "../../component/PokeCard";
import Page from "../../component/Page";
function List() {
  return (
    <Page>
      <Card
        data={[
          { term: "주문일시", description: "하이이" },
          { term: "주문번호", description: "하ㅏ이" },
        ]}
      ></Card>
    </Page>
  );
}

export default List;
