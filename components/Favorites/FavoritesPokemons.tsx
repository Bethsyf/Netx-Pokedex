import FavoriteCardPokemon from '../favoriteCardPokemon/FavoriteCardPokemon';
import styles from '../Favorites/FavoritePokemon.module.scss'


interface Props {
    pokemons: number[];
}

const FavoritesPokemons: FC<Props> = ({ pokemons }): JSX.Element => {
  return (
    <div className={styles.container}>
        {
        pokemons.map( id => (
            <FavoriteCardPokemon key={ id } pokemonId={ id } />          
        ))
    }
    </div>
  )
}

export default FavoritesPokemons