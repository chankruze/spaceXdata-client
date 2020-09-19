/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 18 2020 15:52:19 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import { GQL_LAUNCHPAD } from '../graphql'

function LaunchpadInfo(props) {
    const { loading, error, data } = useQuery(GQL_LAUNCHPAD, { variables: { id: props.launchpadId } })

    if (loading) {
        return (
            <div className="d-flex align-items-center">
                <h4 className="loading">Loading Launchpad Data...</h4>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        )
    }

    if (error) {
        console.log(error)
        return (<h2 className="loading">
            <span role="img" aria-label="warn-emoji">⚠️</span>
            Error Fetching Launchpad Data
        </h2>)
    }

    const {
        name, full_name, locality, region,
        timezone, latitude, longitude, launch_attempts,
        launch_successes, details, status
    } = data.launchpad

    return (
        <div className="card horizontal">
            <div className="card-header horizontal">
                Launchpad Info
            </div>
            <div className="card-body horizontal">
                <div className="left">
                    <h5 className="card-title launchpad-info">{name}</h5>
                    <p className="launchpad-desc">{details}</p>
                    <p className="card-text"><span>Full name:</span> {full_name}</p>
                    <p className="card-text"><span>Status:</span> {status}</p>
                    <p className="card-text"><span>Locality:</span> {locality}</p>
                    <p className="card-text"><span>Region:</span> {region}</p>
                    <p className="card-text"><span>Timezone:</span> {timezone}</p>
                    <p className="card-text"><span>Latitude:</span> {latitude}</p>
                    <p className="card-text"><span>Longitude:</span> {longitude}</p>
                    <p className="card-text"><span>Launch attempts:</span> {launch_attempts}</p>
                    <p className="card-text"><span>Launch successes:</span> {launch_successes}</p>
                    {/* <p className="card-text">Rockets: {rockets}</p>
                    <p className="card-text">Launches: {launches}</p> */}
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default React.memo(LaunchpadInfo)
