import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Single from '../components/Single'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Vaccination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">



        <Header/>
        <Banner/>
        <Single/>
        

      
      </main>
      </div>
  )
}

