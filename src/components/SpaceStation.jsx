import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLoader from './PageLoader'

function SpaceStation({ props }) {
  const [spaceStations, setSpaceStations] = useState(props)
  console.log(spaceStations)

  if (spaceStations) {
    return (
      <>
        <ul>
          {spaceStations.map(station => {
            return (
              <li key={station.id}>
                <h1>{station.title}</h1>
                <p>{station.summary}</p>
                <a href={station.url}>
                  <h5>Read More</h5>
                </a>
              </li>
            )
          })}
        </ul>
      </>
    )
  } else {
    return <PageLoader />
  }
}

export default SpaceStation
