import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLoader from './PageLoader'
import '../styles/spaceStation.scss'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardLink,
} from 'reactstrap'

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
                <Card body outline color="secondary" className="card">
                  <CardImg top-width="100%" src={station.imageUrl} alt="" />
                  <CardBody>
                    <CardTitle tag="h5">{station.title}</CardTitle>
                    <CardText>{station.summary}</CardText>
                    <Button color="warning">
                      <CardLink
                        href={station.url}
                        target="_blank"
                        className="linkss"
                      >
                        Read More
                      </CardLink>
                    </Button>
                  </CardBody>
                </Card>
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
