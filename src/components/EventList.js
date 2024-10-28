// components/EventList.js
import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events, onEventClick }) => {
  return (
    <div className="event-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onEventClick} />
      ))}
    </div>
  );
};

export default EventList;
