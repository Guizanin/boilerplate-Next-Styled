import Head from 'next/head'
import React, { useState } from 'react'

import { cities } from '@hooks/contextCities'

import Faq from '@components/Faq'
import Newsletter from '@components/Newsletter'
import Footer from '@components/Footer'
// import SharingModal from '@components/SharingModal'
// import WeCallModal from '@components/WeCallModal'

export default function City({ city }) {
  const [modalShareOpen, setModalShareOpen] = useState(false)
  const [modalCallOpen, setModalCallOpen] = useState(false)

  return (
    <>
      <Head>
        <title>NEXT_BOILERPLATE - {city}</title>
      </Head>
      <Faq />
      <Newsletter />
      <Footer />
      {/* <WeCallModal status={modalCallOpen} setModal={setModalCallOpen} />
      <SharingModal status={modalShareOpen} setModal={setModalShareOpen} /> */}
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
      city: context.params.city
    }
  }
}
