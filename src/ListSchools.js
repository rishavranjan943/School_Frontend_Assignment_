import React, { useState } from "react";
import axios from "axios";

const ListSchools = ({ setPage }) => {
  const [schools, setSchools] = useState([]);
  const [location, setLocation] = useState({ lat: "", long: "" });

  const fetchSchools = async () => {
    try {
      const response = await axios.get(`https://school-backend-assignment.onrender.com/listSchools?lat=${location.lat}&long=${location.long}`);
      setSchools(response.data);
    } catch (error) {
      console.error("Error fetching schools", error);
    }
  };

  return (
    <div className="container">
      <h2>List Schools</h2>

      <div className="latlong-container">
        <input type="number" step="0.000001" placeholder="Enter Latitude" value={location.lat} onChange={(e) => setLocation({ ...location, lat: e.target.value })} required />
        <input type="number" step="0.000001" placeholder="Enter Longitude" value={location.long} onChange={(e) => setLocation({ ...location, long: e.target.value })} required />
      </div>

      <button onClick={fetchSchools}>List Schools</button>
      <button onClick={() => setPage("home")}>Back</button>

      <ul className="school-list">
        {schools.map((school) => (
          <li key={school.id}>
            <strong>{school.name}</strong> - {school.address}  
            <br />
             (Lat: {school.latitude}, Lng: {school.longitude})  
            <br />
             Distance: {school.distance} meters
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSchools;
