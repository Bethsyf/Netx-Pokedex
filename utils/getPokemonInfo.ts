import pokeApi from "../api/pokeApi";
import { Pokemon } from "../interfaces/pokemon-full";

export const getPokemonInfo = async( id: string ) => {

  
    // const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}