import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import Event from "./Event"
import "./Events.css"

export default () => {
    const { events } = useContext(EventContext)

    return (
        <div className="events">
        {
            events.map(eve => <Event key={eve.id} event={eve} />)
        }
        </div>
    )
}