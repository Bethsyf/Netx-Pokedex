import type { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeApi';
import { PokemonlistResponse, SmallPokemon } from '../interfaces/pokemon-list';

interface Props{
  pokemons: SmallPokemon[];
  
}

const HomePage: NextPage<Props> = ( {pokemons} ) => {
  console.log(pokemons) 
  return (   
    
    <Layout title='Listado de Pokémons'>
      <ul>
        {
        pokemons.map( ({id, name, img}) => (
          <li key={ id }>
            #{ id } - { name } 
            
          </li>
        )      
        )
        }
      </ul>
    </Layout>   
  )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
 
  const { data } = await pokeApi.get<PokemonlistResponse>('/pokemon?limit=151')
  console.log(data)
  const pokemons: SmallPokemon[] = data.results.map( (poke, index ) => ({
    ...poke, 
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
