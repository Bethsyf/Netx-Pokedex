import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image';
import pokeApi from '../api/pokeApi';
import { Layout } from '../components/layouts';
import { PokemonlistResponse, SmallPokemon } from '../interfaces/pokemon-list';
import styles from '../styles/Home.module.scss'

interface Props{
  pokemons: SmallPokemon[];  
}

const HomePage: NextPage<Props> = ( {pokemons} ) => {
  console.log(pokemons) 
  return (
    <Layout title='Listado de Pokémons'>
      <div className={ styles.grid}>
        {
        pokemons.map( ({id, name, img}) => (
          <div className={ styles.card} key={ id }>
            <Image 
              src={img} 
              alt={name}
               width={150} 
               height={150} 
               placeholder='blur'
               blurDataURL={img}
            />

            <h3>{ name }</h3>
            <h3>#{ id }</h3>
          </div>         
        ))
        }
      </div>
    </Layout>   
  )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
 
  const { data } = await pokeApi.get<PokemonlistResponse>('/pokemon?limit=151')
  console.log(data)
  const pokemons: SmallPokemon[] = data.results.map( (poke, index ) => ({
    ...poke, 
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
