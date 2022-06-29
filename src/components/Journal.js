import React from "react";
import location_pin from "../img/location-pin.png";

const Journal = (props) => {
  console.log(location_pin)
  return (
    <section>
      <img src={props.item.imageUrl} alt={props.item.title} className="location--img" />
      <div className="details">
        <div className="flex">
          <img src={location_pin} alt="pin" />
          <p>{props.item.location}</p>
          <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <div className="date">
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="description">{props.item.description}</div>
      </div>
    </section>
  );
};

export default Journal;
