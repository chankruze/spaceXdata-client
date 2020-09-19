/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 18 2020 15:51:53 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import { GQL_ROCKET } from '../graphql'

const gen_key = () => Math.random().toString(36).substring(7)

function RocketInfo(props) {
    const { loading, error, data } = useQuery(GQL_ROCKET, { variables: { id: props.rocketId } })

    if (loading) {
        return (
            <div className="d-flex align-items-center">
                <h4 className="loading">Loading Rocket Data...</h4>
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
        name, type, active, stages, boosters, cost_per_launch,
        success_rate_pct, first_flight, country, company,
        wikipedia, description, flickr_images
    } = data.rocket

    return (
        <div className="card horizontal">
            <div className="card-header horizontal">
                Rocket Info
            </div>
            <div className="card-body horizontal">
                <div className="left">
                    <h5 className="card-title rocket-info">{name}</h5>
                    <p className="rocket-desc">{description}</p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>{type}</td>
                            </tr>
                            <tr>
                                <td>Active</td>
                                <td>{active ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Stages</td>
                                <td>{stages}</td>
                            </tr>
                            <tr>
                                <td>Boosters</td>
                                <td>{boosters}</td>
                            </tr>
                            <tr>
                                <td>Cost per launch</td>
                                <td>{cost_per_launch}</td>
                            </tr>
                            <tr>
                                <td>Success Rate (%)</td>
                                <td>{success_rate_pct}</td>
                            </tr>
                            <tr>
                                <td>First flight</td>
                                <td>{first_flight}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{country}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{company}</td>
                            </tr>
                            <tr>
                                <td>First flight</td>
                                <td>{first_flight}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <div className="prop-wrapper">
                        <div className="title">
                            Landing legs
                        </div>
                        <div className="body">
                            <span className="card-text">Number: {landing_legs.number}</span>
                            <span className="card-text">Material: {landing_legs.material}</span>
                        </div>
                    </div> */}

                    {/* <div className="prop-wrapper">
                        <div className="title">
                            Payload Weights
                        </div>
                        <div className="body">
                            <span className="card-text">id: {payload_weights.id}</span>
                            <span className="card-text">name: {payload_weights.name}</span>
                            <span className="card-text">kg: {payload_weights.kg}</span>
                            <span className="card-text">lb: {payload_weights.lb}</span>
                        </div>
                    </div> */}

                    {/* <div className="engine-wrapper">
                        <p className="card-text">Engines</p>
                        <p className="card-text">number: {engines.number}</p>
                        <p className="card-text">name: {engines.name}</p>
                        <p className="card-text">type: {engines.type}</p>
                        <p className="card-text">version: {engines.version}</p>
                        <p className="card-text">layout: {engines.layout}</p>
                        <p className="card-text">engine_loss_max: {engines.engine_loss_max}</p>
                        <p className="card-text">propellant_1: {engines.propellant_1}</p>
                        <p className="card-text">propellant_2: {engines.propellant_2}</p>
                        <p className="card-text">thrust_to_weight: {engines.thrust_to_weight}</p>

                        <p className="card-text">thrust sea level:
                            {engines.thrust_sea_level.kN} kN
                            {engines.thrust_sea_level.lbf} lbf
                        </p>

                        <p className="card-text">thrust vacuum:
                            {engines.thrust_vacuum.kN} kN
                            {engines.thrust_vacuum.lbf} lbf
                        </p>

                        <p className="card-text">isp:
                            sea level: {engines.sea_level.kN}
                            vacuum: {engines.vacuum.lbf}
                        </p>
                    </div> */}

                    <a href={wikipedia} className="btn btn-wikipedia" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-wikipedia-w"></i>Wikipedia
                    </a>
                </div>
                <div className="right rocket-img-wrapper">
                    {
                        flickr_images.map((url) =>
                            <img src={url} alt="Rocket" key={gen_key()} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(RocketInfo)
