const PokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/butterfree").then((res) =>
    res.json()
  );
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
const PokemonApi = {
  PokemonList,
  PokemonName,
};

export default PokemonApi;
