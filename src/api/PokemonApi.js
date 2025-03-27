const PokemonList = async () => {
  const allPokemonData = [];
  let result;
  for (let i = 1; i <= 20; i++) {
    result = await Pokemon1(i);
    allPokemonData.push({
      imgUrl: result.sprites.back_default,
      type: result.types.map((el) => el.type.name),
      ability: result.abilities.map((el) => el.ability.name),
      move: result.moves.map((el) => el.move.name),
      height: result.height,
      weight: result.weight,
      name: result.species.name,
    });
    result = await Pokemon2(i);
    // debugger;
    allPokemonData[i - 1] = {
      ...allPokemonData[i - 1],
      koreanName: result.names.find((nameObj) => nameObj.language.name === "ko")
        .name,
    };
    // console.log(result)
  }
  console.log(allPokemonData);
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
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
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
async function Pokemon1(i) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json())
    .then((result) => result);
}
async function Pokemon2(i) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
    .then((res) => res.json())
    .then((result) => result);
}
const createArray = async () => {
  const getEvolutionChainArray = await getEvolutionChain("pikachu");

  return await Promise.all(
    getEvolutionChainArray.map(async (element) => {
      const result = await Pokemon1(element);
      return {
        imgUrl: result.sprites.back_default,
        name: result.species.name,
      };
    })
  );
};
const PokemonApi = {
  PokemonList,
  PokemonName,
  createArray,
};

export default PokemonApi;
