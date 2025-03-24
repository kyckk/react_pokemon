 

 const PokemonList = async() => {
  const allPokemonData = [];
  for (let i = 1; i <= 20; i++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) =>
      res.json()
    ).then((result)=>(
      // console.log(result.types.map((el)=>el.type.name)),
      // console.log(result.abilities.map((el)=>el.ability.name)),
      // console.log(result.moves.map((el)=>el.move.name)),
      // console.log(result.height),
      // console.log(result.weight),
      allPokemonData.push({
        imgUrl:result.sprites.back_default,
        type:result.types.map((el)=>el.type.name),
        ability:result.abilities.map((el)=>el.ability.name),
        move:result.moves.map((el)=>el.move.name),
        height:result.height,
        weight:result.weight
      })
    )
    
    )
    // debugger;
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`).then((res) =>
      res.json()
    ).then(
      (result) =>
        ( allPokemonData[i-1]={...allPokemonData[i-1],koreanName:result.names.find(
          (nameObj) => nameObj.language.name === "ko"
        ).name}
          
          )
    );
    
 }
   console.log(allPokemonData)
   getEvolutionChain("pikachu");
  return allPokemonData;
};

const PokemonName = () => {
  let result2 = "";
  const result = fetch("https://pokeapi.co/api/v2/pokemon-species/butterfree")
    .then((res) => res.json())
    .then(
      (result) =>
        (result2 = result.names.find(
          (nameObj) => nameObj.language.name === "ko"
        ).name)
    );
  console.log(result2);

  return result;
};
async function getEvolutionChain(pokemonName) {
  try {
      // 1️⃣ 포켓몬 기본 정보 가져오기
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      let data = await response.json();
      let speciesUrl = data.species.url; 

      // 2️⃣ 포켓몬 종(species) 정보 가져오기
      response = await fetch(speciesUrl);
      data = await response.json();
      let evolutionUrl = data.evolution_chain.url;

      // 3️⃣ 진화 체인 정보 가져오기
      response = await fetch(evolutionUrl);
      data = await response.json();

      // 4️⃣ 진화 과정 정리
      let evolutionData = [];
      let current = data.chain;

      while (current) {
          evolutionData.push(current.species.name);
          current = current.evolves_to.length > 0 ? current.evolves_to[0] : null;
      }

      console.log("진화 과정:", evolutionData);
      return evolutionData;
  } catch (error) {
      console.error("에러 발생:", error);
  }
}

const PokemonApi = {
  PokemonList,
  PokemonName,
};



export default PokemonApi;
