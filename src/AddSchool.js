import React, { useState } from "react";
import axios from "axios";

const AddSchool = ({ setPage }) => {
  const [newSchool, setNewSchool] = useState({ name: "", address: "", latitude: "", longitude: "" });

  const addSchool = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://school-backend-assignment.onrender.com/addSchool", {
        ...newSchool,
        latitude: parseFloat(newSchool.latitude),
        longitude: parseFloat(newSchool.longitude),
      });
      alert("School added successfully");
      setPage("home");
    } catch (error) {
      console.error("Error adding school", error);
    }
  };

  return (
    <div className="container">
      <h2>Add School</h2>
      <form onSubmit={addSchool} className="school-form">
        <input type="text" placeholder="School Name" value={newSchool.name} onChange={(e) => setNewSchool({ ...newSchool, name: e.target.value })} required />
        <input type="text" placeholder="Address" value={newSchool.address} onChange={(e) => setNewSchool({ ...newSchool, address: e.target.value })} required />
        
        <div className="latlong-container">
          <input type="number" step="0.000001" placeholder="Latitude" value={newSchool.latitude} onChange={(e) => setNewSchool({ ...newSchool, latitude: e.target.value })} required />
          <input type="number" step="0.000001" placeholder="Longitude" value={newSchool.longitude} onChange={(e) => setNewSchool({ ...newSchool, longitude: e.target.value })} required />
        </div>

        <button type="submit">Add School</button>
      </form>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
};

export default AddSchool;
