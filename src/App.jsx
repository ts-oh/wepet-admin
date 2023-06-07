import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const AdminPage = () => {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [category, setCategory] = useState('')
  // const [productDescription, setProductDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [thumbnailLink, setThumbnailLink] = useState('')
  const [serverAddress, setServerAddress] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newProduct = {
      productName: productName,
      productPrice: productPrice,
      // productDescription: productDescription,
      productCategoryId: category,
      productQuantity: quantity,
      mainImageUrl: thumbnailLink,
    }

    try {
      const response = await axios.post(
        `http://${serverAddress}/products`,
        newProduct
      )

      setProductName('')
      setProductPrice('')
      setCategory('')
      // setProductDescription('')
      setQuantity('')
      setThumbnailLink('')

      console.log('Product added 🥳:', response.data)
    } catch (error) {
      console.error('Error adding product 🫠:', error)
    }
  }

  return (
    <div>
      <h1>WePet 🐶 Admin 😼 Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Server Address 💌:</label>
          <input
            type="text"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Product Name 🪪:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label>Product Price 💰:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Product Category ID 🏷️:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {/* <div>
          <label>Product Description 📝:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value.trim())}
          />
        </div> */}
        <div>
          <label>Quantity 🔢:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Image Thumbnail Link 🏞️:</label>
          <input
            type="text"
            value={thumbnailLink}
            onChange={(e) => setThumbnailLink(e.target.value)}
          />
        </div>
        <button type="submit">Post Product 🥓</button>
      </form>
    </div>
  )
}

export default AdminPage
