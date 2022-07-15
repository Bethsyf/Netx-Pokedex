import { GetStaticProps, NextPage } from 'next';
import { GetStaticPaths } from 'next'
import Image from 'next/image';
import React from 'react'
import pokeApi from '../../api/pokeApi';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces/pokemon-full';
import styles from '../../styles/pokemon.module.scss'
import localFavorites from '../../utils/localFavorites';


interface Props {
  pokemon: Pokemon;
  
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

 const onToggleFavorite = () => {
  localFavorites.toggleFavorite(pokemon.id);
 }

  return (
    <Layout title={pokemon.name}>      
      <div className={ styles.container}>
        <div className={ styles.card1}>
          <Image 
            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' } 
            alt={pokemon.name}
            width={150}
            height={150}          
          />
        </div>
        <div className={ styles.card2}>
          <div className={ styles.container2}>
            <h1>{pokemon.name}</h1>
            <button className={ styles.btn}>Guardar en Favoritos</button>
          </div>          
          <p>Sprites:</p>
          <Image 
            src={ pokemon.sprites.front_default || '/no-image.png' } 
            alt={pokemon.name}
            width={100}
            height={100}          
          />
          <Image 
            src={ pokemon.sprites.back_default || '/no-image.png' } 
            alt={pokemon.name}
            width={100}
            height={100}          
          />
          <Image 
            src={ pokemon.sprites.front_shiny || '/no-image.png' } 
            alt={pokemon.name}
            width={100}
            height={100}          
          />
          <Image 
            src={ pokemon.sprites.back_shiny || '/no-image.png' } 
            alt={pokemon.name}
            width={100}
            height={100}          
          />          
        </div>
      </div>

    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
const pokemon151 = [...Array(151)].map(( value, index ) => `${ index + 1 }`);

  return {
    paths: pokemon151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
 
  const { id } = params as { id: string }


  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)
  

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage