// Author: chankruze (chankruze@geekofia.in)
// Created: Sat Sep 19 2020 09:20:51 GMT+0530 (India Standard Time)

// Copyright (c) Geekofia 2020 and beyond

import { gql } from '@apollo/client'

export const GQL_LAUNCHES = gql`
  query LaunchesQuerry {
    launches {
        id
        name
        success
        flight_number
        date_utc
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

export const GQL_LAUNCH = gql`
query LaunchQuerry($id: String!) {
    launch(id: $id) {
        flight_number
        name
        success
        static_fire_date_utc
        static_fire_date_unix
        date_utc
        date_local
        date_unix
        launchpad
        details
        rocket
        upcoming
        crew
        ships
        capsules
        payloads
        window
        failures {
            time
            altitude
            reason
        }
        links {
            patch {
                small
                large
            }
            reddit {
                campaign
                launch
                media
                recovery
            }
            flickr {
                small
                original
            }
            webcast
            article
            wikipedia
        }
        cores {
            core
            flight
            gridfins
            legs
            reused
            landing_attempt
            landing_success
            landing_type
            landpad
        }
    }  
}
`

export const GQL_ROCKET = gql`
query RocketQuerry($id: String!) {
    rocket(id: $id) {
        name
        type
        active
        stages
        boosters
        cost_per_launch
        success_rate_pct
        first_flight
        country
        company
        wikipedia
        description
        flickr_images
        height {
            meters
            feet
        }
        diameter {
            meters
            feet
        }
        mass {
            kg
            lb
        }
        landing_legs {
            number
            material
        }
        payload_weights {
            id
            name
            kg
            lb
        }
        engines {
            number
            type
            version
            layout
            engine_loss_max
            propellant_1
            propellant_2
            thrust_to_weight
            isp {
                sea_level
                vacuum
            }
            thrust_sea_level {
                kN
                lbf
            }
            thrust_vacuum {
                kN
                lbf
            }
        }
    }
}
`

export const GQL_LAUNCHPAD = gql`
query RocketQuerry($id: String!) {
    launchpad(id: $id) {
        name,
        full_name
        locality
        region
        timezone
        latitude
        longitude
        launch_attempts
        launch_successes
        rockets
        launches
        details
        status
    }
}
`
