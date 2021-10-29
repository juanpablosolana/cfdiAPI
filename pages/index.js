import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Supabase from '../components/Auth'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CFDI | API</title>
        <meta name="description" content="Consulta de forma fácil y masivamente el estatus de los CFDI 3.3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Verificación de comprobantes fiscales digitales por internet</h1>
      </main>
      {/* <Supabase/> */}
      <Form/>
      <footer className={styles.footer}>
        <a
          href="https://pablosolana.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por Pablo Solana
        </a>
      </footer>
    </div>
  )
}