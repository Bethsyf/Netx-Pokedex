import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import NoFavorites from '../../components/NoFavorites/NoFavorites'
import localFavorites from '../../utils/localFavorites'
import FavoritesPokemons from '../../components/Favorites/FavoritesPokemons';
import styles from '../../styles/favorites.module.scss'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, []);

  return (
    <Layout  title='pokémons - Favoritos'>
        <div className={styles.container}>
        {
          favoritePokemons.length === 0 
            ? ( <NoFavorites /> )
            : ( <FavoritesPokemons pokemons={favoritePokemons} /> )
              }
        </div>
    </Layout>
  )
}

export default FavoritesPage