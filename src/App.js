// App.js
import React, { useState } from "react";
import EventList from "./components/EventList.js";
import EventModal from "./components/EventModal.js";
import SearchBar from "./components/SearchBar.js";
import events from "./mockData.js";
import Hero from "./components/hero.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on the search term
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
     <div className=" ">

      <Hero/>
     </div>
      <div className="">

      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
      <EventList events={filteredEvents} onEventClick={setSelectedEvent} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </div>
    </div>
  );
}

export default App;
