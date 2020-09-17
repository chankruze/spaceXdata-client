/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Sep 17 2020 15:26:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Launch from './Launch'

const ALL_LAUNCHES = gql`
  query LaunchesQuerry {
    launches {
        id
        name
        success
        flight_number
        date_utc
        rocket_details {
            name
        }
        links {
            patch {
                small
            }
            webcast
            article
            wikipedia
        }
    }
  }
`

function Launches() {
    const { loading, error, data } = useQuery(ALL_LAUNCHES)

    if (loading) return (
        <div class="d-flex align-items-center">
            <h4>Loading...</h4>
            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
    )
    if (error) console.log(error)

    return (
        <React.Fragment>
            <div className="launch-wrapper">
                {
                    data.launches.map((data) => (
                        <Launch key={data.id} launchData={data} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default Launches
