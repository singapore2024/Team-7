"use client"

import Image from "next/image"
import { CameraIcon } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <div className="bg-[#85be40] text-white rounded-t-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-full border-4 border-white"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-gray-200 rounded-full">
                <CameraIcon className="h-4 w-4 text-black" />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-green-100">@johndoe</p>
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