import { GetStaticProps, NextPage } from 'next';
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import { Layout } from '../../components/layouts'

interface Props {
  pokemon: any;
  
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {



  return (
    <Layout title='algun pokémon'>
      <h1>Temporal</h1>
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


  // const { data } = await pokeApi.get<PokemonlistResponse>('/pokemon?limit=151')
  

  return {
    props: {
      pokemon: 'bet'
    }
  }
}

export default PokemonPage