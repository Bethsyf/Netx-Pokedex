import pokeApi from "../api/pokeApi";
import { Pokemon } from "../interfaces/pokemon-full";

export const getPokemonInfo = async( id: string ) => {

    try{
  
    // const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

    // if ( !pokemon ) {
    //     return {
    //     redirect: {
    //         destination: '/',
    //         permanent: false
    //     }
    // }
    // }
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
} catch (error) {
    return null;
}
}