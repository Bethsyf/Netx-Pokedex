import Image from 'next/image';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces/pokemon-list';
import styles from './PokemonCard.module.scss'


interface Props {  
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  return (
    
      <div className={ styles.card} key={ pokemon.id }>
            <Image 
              src={pokemon.img} 
              alt={pokemon.name}
               width={150} 
               height={150} 
               placeholder='blur'
               blurDataURL={pokemon.img}
            />

            <h3>{ pokemon.name }</h3>
            <h3>#{ pokemon.id }</h3>
          </div>
    
  )
}

