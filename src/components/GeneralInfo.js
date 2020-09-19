/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 18 2020 15:52:03 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import dateFormat from 'dateformat'

function GeneralInfo(props) {
    const {
        name, success, date_utc, flight_number,
        window, links, details
    } = props.payload

    return (
        <div className="card horizontal">
            <div className="card-header horizontal">
                General Info
            </div>
            <div className="card-body horizontal">
                <div className="left">
                    <h5 className="card-title">{name}</h5>
                    <p className="general-desc">{details}</p>
                    <p className="card-text"><span>Flight number:</span> {flight_number}</p>
                    <p className="card-text"><span>Successful:</span> {success ? 'Yes' : 'No'}</p>
                    <p className="card-text"><span>Date (UTC):</span> {dateFormat(date_utc, "dddd, mmmm dS, yyyy, hh:MM:ss TT")}</p>
                    <p className="card-text"><span>Windows:</span> {details}</p>
                    <p className="card-text"><span>Windows:</span> {window}</p>
                    <div className="btn-row horizontal">
                        <a href={links.webcast} className="btn btn-webcast hvr-icon-pulse-grow" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube hvr-icon"></i>Webcast
                        </a>
                        <a href={links.article} className="btn btn-article hvr-icon-pulse-grow" target="_blank" rel="noopener noreferrer">
                            <i className="far fa-newspaper hvr-icon"></i>Article
                            </a>
                        <a href={links.wikipedia} className="btn btn-wikipedia hvr-icon-pulse-grow" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-wikipedia-w hvr-icon"></i>Wikipedia
                        </a>
                    </div>
                </div>
                <div className="right">
                    <img src={links.patch.small} alt="Patch" />
                </div>
            </div>
        </div>
    )
}

export default React.memo(GeneralInfo)
