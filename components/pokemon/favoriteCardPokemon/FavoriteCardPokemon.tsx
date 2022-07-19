import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    pokemonId: number;
}

const FavoriteCardPokemon = ( {pokemonId}: Props ) => {
    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${ pokemonId }`);
      }
  
    return (
    <div onClick={ onFavoriteClicked }>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
          alt='{pokemonId}'
          width={'100%'}
          height={ 140 }          
        />        
    </div>
  )
}

export default FavoriteCardPokemon