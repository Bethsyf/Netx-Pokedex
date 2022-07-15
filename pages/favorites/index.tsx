import Image from 'next/image'
import React from 'react'
import { Layout } from '../../components/layouts'
import NoFavorites from '../../components/NoFavorites/NoFavorites'
import styles from '../../styles/favorites.module.scss'

const FavoritesPage = () => {
  return (
    <Layout  title='pokémons - Favoritos'>
        <div className={styles.container}>
        <NoFavorites/>
        </div>
    </Layout>
  )
}

export default FavoritesPage