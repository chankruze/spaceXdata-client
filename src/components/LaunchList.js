/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Sep 17 2020 16:57:55 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

function LaunchList(props) {
    const {
        id,
        name,
        success,
        flight_number,
        date_utc,
        links
    } = props.launchData

    // Wed Mar 21 2007 06:40:00 GMT+0530 (India Standard Time)
    // Wed Mar 21 2007 06:40:00

    return (
        <div className="card vertical">
            <div className={`card-header ${success ? 'success' : 'failure'}`}>
                <img className="card-img-top" src={links.patch.small} alt="Patch" />
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body">
                <h6>Id: <span>{id}</span></h6>
                <h6>Flight Number: <span>{flight_number}</span></h6>
                <h6>Date: <span>{dateFormat(date_utc, "dS mmm, yyyy")}</span></h6>
                <h6>Time: <span>{dateFormat(date_utc, "hh:MM:ss TT")}</span></h6>
                <h6>Day: <span>{dateFormat(date_utc, "dddd")}</span></h6>
            </div>
            <div className="card-footer">
                <div className="btn-row">
                    <a href={links.webcast} className="btn btn-info" target="_blank" rel="noopener noreferrer">Webcast</a>
                    <a href={links.article} className="btn btn-warning" target="_blank" rel="noopener noreferrer">Article</a>
                    <a href={links.wikipedia} className="btn btn-info" target="_blank" rel="noopener noreferrer">Wikipedia</a>
                </div>
                <Link to={`/launch/${id}`} className="btn btn-fluid btn-dark" rel="noopener noreferrer">More</Link>
            </div>
        </div>
    )
}

export default React.memo(LaunchList)
