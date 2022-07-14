import { GetStaticProps, NextPage } from 'next';
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import pokeApi from '../../api/pokeApi';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces/pokemon-full';

interface Props {
  pokemon: any;
  
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
 console.log(pokemon);

  return (
    <Layout title='algun pokémon'>
      <h1>{pokemon.name}</h1>
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