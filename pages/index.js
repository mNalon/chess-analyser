import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Chessboard } from '../components/chessboard' 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chess Analyser</title>
      </Head>

      <main className={styles.main}>
        <Chessboard size={'400px'}></Chessboard>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  )
}
