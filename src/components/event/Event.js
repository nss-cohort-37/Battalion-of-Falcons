import React from "react"
import "./Events.css"


export default ({ event }) => (
    <section className="event">
        <h3 className="event__name">{event.name}</h3>
        <br/>
        <div className="event__date">{event.date}</div>
        <div className="event__location">{event.location}</div>
    </section>
)
