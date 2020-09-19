/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Sep 17 2020 15:26:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import LaunchList from './LaunchList'
import { GQL_LAUNCHES } from '../graphql'

function Launches() {
    const { loading, error, data } = useQuery(GQL_LAUNCHES)

    if (loading) {
        return (
            <div className="d-flex align-items-center">
                <h4 className="loading">Loading...</h4>
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

    const allLaunches = data.launches
    const failedLaunches = data.launches.filter((obj) => !obj.success)

    return (
        <React.Fragment>
            <div className="launches">
                <div className="launch-header">
                    <h2 className="title success">
                        <span role="img" aria-label="rocket-emoji">🚀</span>
                         All Launches ({allLaunches.length})
                    </h2>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search All Launches" aria-label="Search All Launches" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="button">search</button>
                        </div>
                    </div>
                </div>
                <div className="launch-list-wrapper success">
                    {
                        allLaunches.map((launch) => (
                            <LaunchList key={launch.id} launchData={launch} />
                        ))
                    }
                </div>
            </div>
            <div className="launches">
                <div className="launch-header">
                    <h2 className="title failed">
                        <span role="img" aria-label="warn-emoji">⚠️</span>
                        Failed Launches ({failedLaunches.length})
                    </h2>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Failed Launches" aria-label="Search Failed Launches" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="button">search</button>
                        </div>
                    </div>
                </div>
                <div className="launch-list-wrapper failures">
                    {
                        failedLaunches.map((launch) => (
                            <LaunchList key={launch.id} launchData={launch} />
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Launches
