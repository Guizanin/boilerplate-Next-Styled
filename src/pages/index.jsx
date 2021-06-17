import Head from 'next/head'

import { HelloWorld } from '../components/HelloWorld'

export default function Home() {
  return (
    <>
      <Head>
        <title>Boilerplate Next Styled</title>
      </Head>
      <HelloWorld />
    </>
  )
}
