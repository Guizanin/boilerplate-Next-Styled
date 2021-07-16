import Head from 'next/head'
import React, { useContext, useState } from 'react'

export default function City({ city }) {
  const [modalShareOpen, setModalShareOpen] = useState(false)
  const [modalCallOpen, setModalCallOpen] = useState(false)

  return (
    <>
      <Head>
        <title>NEXT_BOILERPLATE - {city}</title>
      </Head>
      <Header setModal={setModalCallOpen} />
      <BannerMain cidade={cidade} />
      <Combos setModal={setModalShareOpen} />
      <Broadband setModal={setModalShareOpen} />
      <VantagemCombos setModal={setModalShareOpen} />
      <Faq />
      <FutureCard setModal={setModalShareOpen} />
      <NossaRede setModal={setModalShareOpen} />
      <Newsletter />
      <Footer />
      <WeCallModal status={modalCallOpen} setModal={setModalCallOpen} />
      <SharingModal status={modalShareOpen} setModal={setModalShareOpen} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: cities,
    fallback: false
  }
}
export async function getStaticProps(context) {
  return {
    props: {
      city: context.city
    }
  }
}
