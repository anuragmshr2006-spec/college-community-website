// src/pages/Events.jsx
import React, { useState, useEffect } from 'react';
import api from '../api/authService'; // Use the configured Axios instance

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/all-events'); // Assuming the GET endpoint is '/all-events'
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <div>Loading Events...</div>;

  return (
    <div>
      <h2>Upcoming College Events</h2>
      {events.map(event => (
        <div key={event.id}>{event.title}</div>
      ))}
    </div>
  );
};
export default Events;




//import React, { useEffect, useState } from "react";
// import { fetchEvents, createEvent } from "../api/events";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [form, setForm] = useState({ title: "", description: "", date: "" });

//   const loadEvents = async () => {
//     const data = await fetchEvents();
//     if(Array.isArray(data)) setEvents(data);
//     else setEvents([]);
//   };

//   useEffect(() => {
//     // if not logged in -> do not call api
//     const token = localStorage.getItem("accessToken");
//     if(!token){
//       alert("Login required to view events");
//       return;
//     }
//     loadEvents();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await createEvent(form);
    
//     if(res.error){
//       alert("Failed to create event ❌");
//     } else {
//       alert("Event Created ✅");
//       setForm({ title: "", description: "", date: "" });
//       loadEvents();
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Events</h2>

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Event Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         /><br/>

//         <input type="text" placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         /><br/>

//         <input type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//         /><br/>

//         <button type="submit">Add Event</button>
//       </form>

//       <hr/>

//       <h3>All Events:</h3>
//       {events.length === 0 ? <p>No events..</p> :
//         events.map((ev, i) => (
//           <div key={i} style={{ border:"1px solid gray", margin:"5px", padding:"10px" }}>
//             <b>{ev.title}</b><br/>
//             {ev.description} <br/>
//             <small>{ev.date}</small>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Events;
