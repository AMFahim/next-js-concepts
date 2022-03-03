import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <div>
      <h1>Abdul Mozid Fahim</h1>
      <Link href="/fahim"><a>See all fahim</a></Link>
    </div>
  )
}
