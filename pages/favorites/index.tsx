import React from 'react'
import { Layout } from '../../components/layouts'
import styles from '../../styles/favorites.module.scss'

const FavoritesPage = () => {
  return (
    <Layout  title='pokémons - Favoritos'>
        <div className={styles.container}>
        <h1>Favoritos</h1>
        </div>
    </Layout>
  )
}

export default FavoritesPage