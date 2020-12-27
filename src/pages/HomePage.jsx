import React, { useEffect, useState } from 'react'
import SpaceStation from '../components/SpaceStation'
import axios from 'axios'
import PageLoader from '../components/PageLoader'
import Hero from '../components/Hero'

function HomePage() {
  const [spaceStation, setSpaceStation] = useState()

  useEffect(() => {
    const getSpace = async () => {
      const resp = await axios.get(
        'https://test.spaceflightnewsapi.net/api/v2/reports?_limit=10'
      )
      // console.log(resp.data)
      setSpaceStation(resp.data)
    }
    getSpace()
  }, [])
  console.log(spaceStation)

  if (spaceStation) {
    return (
      <>
        <Hero />
        <SpaceStation props={spaceStation} />
      </>
    )
  } else {
    return <PageLoader />
  }
}

export default HomePage
