"use client"

import { useState } from "react"

export default function RequirementsForm() {
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#85be40]">Add Item</h2>
        <form className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium text-[#85be40]">
              Name of Product
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label htmlFor="quantity" className="block font-medium text-[#85be40]">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label htmlFor="imageUpload" className="block font-medium text-[#85be40]">
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
            {image && (
              <img src={image} alt="Uploaded Preview" className="mt-4 h-32 w-32 object-cover rounded-md" />
            )}
          </div>

          {/* Contact (Phone Number) */}
          <div className="space-y-2">
            <label htmlFor="contact" className="block font-medium text-[#85be40]">
              Contact (Phone Number)
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="+65 99999999"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
          </div>

          {/* Preparation Steps */}
          <div className="space-y-2">
            <label htmlFor="preparationSteps" className="block font-medium text-[#85be40]">
              Preparation Steps
            </label>
            <textarea
              id="preparationSteps"
              placeholder="Describe the preparation steps"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40] min-h-[100px]"
            ></textarea>
          </div>

          {/* Date Harvested */}
          <div className="space-y-2">
            <label htmlFor="dateHarvested" className="block font-medium text-[#85be40]">
              Date Harvested
            </label>
            <input
              type="date"
              id="dateHarvested"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
          </div>

          {/* Date Posted */}
          <div className="space-y-2">
            <label htmlFor="datePosted" className="block font-medium text-[#85be40]">
              Date Posted
            </label>
            <input
              type="date"
              id="datePosted"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="transactionType" className="block font-medium text-[#85be40]">
              Transaction Type
            </label>
            <select
              id="transactionType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            >
              <option value="">Select transaction type</option>
              <option value="exchange">Exchange</option>
              <option value="sell">Sell</option>
              <option value="buy">Buy</option>
              <option value="buy">Donate</option>
            </select>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#85be40] text-white rounded-md hover:bg-[#85be40]/90 focus:ring-4 focus:ring-[#85be40]/50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
