import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const AdminPage = () => {
  const [serverAddress, setServerAddress] = useState('')
  const [studioName, setStudioName] = useState('')
  const [hostId, setHostId] = useState('')
  const [studioPrice, setStudioPrice] = useState('')
  const [studioAddress, setStudioAddress] = useState('')
  const [studioTypeId, setStudioTypeId] = useState('')
  const [studioCategoryId, setStudioCategoryId] = useState('')
  const [description, setDescription] = useState('')
  const [maxGuests, setMaxGuests] = useState('')
  const [rules, setRules] = useState('')
  const [locationLatitude, setLocationLatitude] = useState('')
  const [locationLongitude, setLocationLongitude] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newStudio = {
      studioName: studioName,
      hostId: hostId,
      studioPrice: parseFloat(studioPrice),
      studioAddress: studioAddress,
      studioTypeId: parseInt(studioTypeId),
      studioCategoryId: parseInt(studioCategoryId),
      description: description,
      maxGuests: parseInt(maxGuests),
      rules: rules,
      locationLatitude: parseFloat(locationLatitude),
      locationLongitude: parseInt(locationLongitude),
    }

    try {
      const response = await axios.post(
        `http://${serverAddress}/studios`,
        newStudio
      )

      setStudioName('')
      setStudioPrice('')
      setStudioAddress('')
      setStudioTypeId('')
      setStudioCategoryId('')
      setDescription('')
      setMaxGuests('')
      setRules('')
      setLocationLatitude('')
      setLocationLongitude('')

      console.log('Studio added 🥳:', response.data)
    } catch (error) {
      console.error('Error adding studio 🫠:', error)
    }
  }

  return (
    <div>
      <h1>SPACE AROUND 👨‍🚀</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Server Address 💌: (e.g. 127.0.0.1:8001)</label>
          <input
            type="text"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Studio Name 🪪:</label>
          <input
            type="text"
            value={studioName}
            onChange={(e) => setStudioName(e.target.value)}
          />
        </div>
        <div>
          <label>Host ID 🔢:</label>
          <input
            type="text"
            value={hostId}
            onChange={(e) => setHostId(e.target.value)}
          />
        </div>
        <div>
          <label>Studio Price 💰:</label>
          <input
            type="text"
            value={studioPrice}
            onChange={(e) => setStudioPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Studio Address 🏢:</label>
          <input
            type="text"
            value={studioAddress}
            onChange={(e) => setStudioAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Studio Type ID 🏷️:</label>
          <input
            type="text"
            value={studioTypeId}
            onChange={(e) => setStudioTypeId(e.target.value)}
          />
        </div>
        <div>
          <label>Studio Category ID 🏷️:</label>
          <input
            type="text"
            value={studioCategoryId}
            onChange={(e) => setStudioCategoryId(e.target.value)}
          />
        </div>
        <div>
          <label>Description 📝:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Max Guests 👥:</label>
          <input
            type="text"
            value={maxGuests}
            onChange={(e) => setMaxGuests(e.target.value)}
          />
        </div>
        <div>
          <label>Rules ⚠️:</label>
          <textarea value={rules} onChange={(e) => setRules(e.target.value)} />
        </div>
        <div>
          <label>Location Latitude 🌍:</label>
          <input
            type="text"
            value={locationLatitude}
            onChange={(e) => setLocationLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>Location Longitude 🌍:</label>
          <input
            type="text"
            value={locationLongitude}
            onChange={(e) => setLocationLongitude(e.target.value)}
          />
        </div>
        <button type="submit">POST Studio 📮</button>
      </form>
    </div>
  )
}

export default AdminPage
