
import FavoriteCardPokemon from '../favoriteCardPokemon/FavoriteCardPokemon';
import styles from '../favorites/FavoritePokemon.module.scss'

interface Props {
    pokemons: number[];
}

const FavoritesPokemons = ({ pokemons }: Props) => {
  return (
    <div className={styles.general}>
    <div className={styles.container}>
        {
        pokemons.map( id => (
            <FavoriteCardPokemon key={ id } pokemonId={ id } />          
        ))
    }
    </div>
    </div>
  )
}

export default FavoritesPokemons