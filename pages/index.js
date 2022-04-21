import styles from '../styles/about.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Orxy | Home </title> 
      <link rel="shortcut icon" href="/Fox.svg" />
      <meta name="keywords" content="Orxy" />
    </Head>
      <div>
        <h1 className={styles.title + ' text-3xl mb-8 font-semibold  '}>Homepage</h1>
        <p className={styles.text}>
          this is a lorem text so i am writing any thing i don't care what i write so don't wast your time reading this
          this is a lorem text so i am writing any thing i don't care what i write so don't wast your time reading this
        </p>
        <p className={styles.text + ' my-6'}>
          this is a lorem text so i am writing any thing i don't care what i write so don't wast your time reading this
          this is a lorem text so i am writing any thing i don't care what i write so don't wast your time reading this
        </p>
        <Link href='/movs/contacts'><a className={styles.btn}> see mov listing </a></Link>
      </div>
    </>

  )
}
