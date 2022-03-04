import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FahimsImage from '../public/banner.jpg'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Fahim</title>
      <meta name="description" content= "Hey there! I'm listening to the ocean." />
    </Head>
      <div>
        <h1>Abdul Mozid Fahim</h1>
        <Image src={FahimsImage} height={200} width={200} alt="Fahim" />
        <Link href="/fahim"><a>See all fahim</a></Link>
        <Link href="/about"><a>Go to about</a></Link>
      </div>
    </>
  )
}
