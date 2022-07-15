import Image from 'next/image'
import styles from '../NoFavorites/NoFavorites.module.scss'

const NoFavorites = () => {
    return (
        <div className={styles.container}>
            <h1>No hay Favoritos</h1>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                alt='no hay pokemon'
                width={250}
                height={250}
            />
        </div>
    )
}

export default NoFavorites