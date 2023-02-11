/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import Link from 'next/link'







/* 

export async function getServerProps() {

  const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");

  return { props: { pokemon: await resp.json(), } };
}   */

export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}




export default function Home({ pokemon }) {

  return (
    <div className={styles.container}>
      <Head>
        <title> Pokemon List </title>
      </Head>
      <h1>LIST OF POKEMONS</h1>
      <div className={styles.grid} >

        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`} >

              <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`
              } alt={pokemon.name}
              />
              <h3>{pokemon.name}</h3>

            </Link>
          </div>

        ))}

      </div>
    </div>


  )
}
