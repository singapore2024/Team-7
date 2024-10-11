"use client"

import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <div className="bg-[#85be40] text-white rounded-t-lg p-6">
          <div className="flex items-center justify-center space-x-4"> {/* Center content */}
            <div>
              <h2 className="text-2xl font-bold text-center">John Doe</h2> {/* Center text */}
              <p className="text-green-100 text-center">@johndoe</p> {/* Center text */}
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
            {/* Added phone number section */}
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
        </div>
      </div>
    </div>
  )
}
