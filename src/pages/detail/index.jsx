import Page from "../../component/Page";
import PokemonNavbar from "../../component/pokemonNavbar";
import React,{ useEffect, useState, useContext }from "react";
import RadarChartComponent from "../../component/RadarChart";
import PokemonSelect from "./PokemonSelect";
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 추가
import PokemonApi from "../../api/PokemonApi";
import PokeCard from "../../component/PokeCard";
import "../../static/Main.css"
import * as MyLayout from "../../lib/MyLayout";

const Detail = () => {
  const [createArray, setCreateArray] = useState([]);
  const { setDialog,startLoading,finishLoading } = useContext(MyLayout.LayoutContext);
 
 //console.log(startLoading("상세페이지 목록 로딩중..."));
  //finishLoading()
  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading("상세페이지 목록 로딩중...");
        
        const array = await PokemonApi.createArray();
        setCreateArray(array);
        console.log(array);
      } catch (e) {
       
        console.error(e);
      }finally{
        finishLoading()
      }
    };

    fetchData();
  }, []);

  return (
    <Page header={<PokemonNavbar />}>
      <div style={{ height: "10px", background: "black" }}></div>

      <div
        className="row justify-content-center align-items-center"
        style={{ maxHeight: "1000px" }}
      >
        <div className="col-lg-4">
          <PokemonSelect />
        </div>
        <div className="col-lg-4">
          <RadarChartComponent />
        </div>
      </div>

      <div className="bgLight pt-3">
        <PokeCard data={createArray} />
      </div>
    </Page>
  );
};

export default Detail;
