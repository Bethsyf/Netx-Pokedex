import Image from 'next/image';
import { FC } from 'react';
import styles from './PokemonCard.module.scss'
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../../interfaces/pokemon-list';

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <div className={styles.card} key={pokemon.id}>
      <div className={styles.card2} onClick={ onClick }>
        <Image
          src={pokemon.img}
          alt={pokemon.name}
          width={150}
          height={150}
          placeholder='blur'
          blurDataURL={pokemon.img}
        />
        <div className={styles.title}>
          <h3>{pokemon.name}</h3>
          <h3>#{pokemon.id}</h3>
        </div>
      </div>
    </div>
  )
}

