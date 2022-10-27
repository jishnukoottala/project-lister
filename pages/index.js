import Head from 'next/head'
import Image from 'next/image';
import Login from '../components/Login';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Lister</title>
      </Head>
     
      <Login />
    </>
  )
}
