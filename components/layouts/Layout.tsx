import Head from 'next/head'
import React, { ReactNode } from "react";
import Navbar from '../navbar/Navbar';
import styles from './Layout.module.scss';

interface Props {
  title?: string,
  children?: ReactNode  
}

export const Layout = ( { children, title }: Props ) => {
  return (
   <>
    <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Bethsy Falcon" />
        <meta name="description" content={`Información sobre el pokémon ${ title }`}/>
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
    </Head>

    <Navbar />

    <main className={styles.container}
    >{children}
    </main>
   </>
  )
}

