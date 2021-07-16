import Head from 'next/head'

import { HelloWorld } from '../components/HelloWorld'

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT_BOILERPLATE</title>
      </Head>
      <HelloWorld />
    </>
  )
}
