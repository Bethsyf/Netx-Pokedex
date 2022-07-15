import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={ styles.container }>
        <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="icono de la app"
                width={100}
                height={100}
            />
       
          <Link href='/'>
            <a className={ styles.linka }>
            <h1>P</h1>
            <h2>okémon</h2>
            </a>
          </Link>       
       <Link href='/favorites'><a className={ styles.link }>Favoritos</a></Link>      
    </div>
  )
}

export default Navbar