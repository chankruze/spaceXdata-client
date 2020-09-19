/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 18 2020 11:51:22 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import GeneralInfo from './GeneralInfo'
import RocketInfo from './RocketInfo'
import LaunchpadInfo from './LaunchpadInfo'
import { Link } from 'react-router-dom'
import { GQL_LAUNCH } from '../graphql/'

function Launch(props) {
    const { id } = props.match.params
    const { loading, error, data } = useQuery(GQL_LAUNCH, { variables: { id } })

    if (loading) {
        return (
            <div className="d-flex align-items-center">
                <h4 className="loading">Loading Launch Data...</h4>
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
        flight_number,
        name,
        success,
        date_utc,
        date_local,
        date_unix,
        launchpad,
        details,
        rocket,
        window,
        links
    } = data.launch

    return (
        <div className="launch-wrapper">
            {/* General Info Card */}
            <GeneralInfo payload={{
                name, success, flight_number, date_utc, date_local,
                date_unix, window, links, details
            }} />

            {/* Rocket Info Card */}
            <RocketInfo rocketId={rocket} />

            {/* Launchpad Info Card */}
            <LaunchpadInfo launchpadId={launchpad} />

            {/* Back */}
            <Link to="/" className="btn btn-dark btn-back">
                <i className="fas fa-home"></i> Home
            </Link>
        </div>
    )
}

export default React.memo(Launch)
