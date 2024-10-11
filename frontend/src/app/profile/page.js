"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProfilePage() {
  // State to track rating
  const [rating, setRating] = useState(4) // Example starting rating

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <div className="bg-[#85be40] text-white rounded-t-lg p-6">
          <div className="flex items-center justify-center space-x-4"> {/* Center content */}
            <div>
              <h2 className="text-2xl font-bold text-center">John Doe</h2> {/* Center text */}
              <p className="text-green-100 text-center">@johndoe</p> {/* Center text */}
            </div>
            {/* 5-Star Rating */}
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.149c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.444a1 1 0 00-1.176 0l-3.36 2.444c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.026 9.377c-.783-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.286-3.95z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-[#85be40]">Personal Information</h2>
            <hr className="border-[#85be40]/20" />
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+65 99999999"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="bio" className="block font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder="Tell us about yourself"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40] min-h-[100px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#85be40] text-white rounded-md hover:bg-[#85be40]/90 focus:ring-4 focus:ring-[#85be40]/50"
            >
              Save Changes
            </button>
          </form>

          {/* Review Section */}
          <div className="mt-10 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Review</h3>
            <p className="text-gray-600">
              John is a reliable and hardworking individual who consistently delivers quality work. 
              He communicates well and always meets deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
