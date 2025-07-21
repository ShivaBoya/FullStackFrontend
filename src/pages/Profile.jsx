import React from "react"
import { useAuth } from "../components/contexts/AuthContext"

const Profile = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading profile...</div>
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        You are not logged in. Please login to view your profile.
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <div className="flex items-center gap-4">
        <img
          src={user.profilePic || "https://i.pravatar.cc/150?img=32"}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user.username || user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {user.age && <p><strong>Age:</strong> {user.age}</p>}
        {user.gender && <p><strong>Gender:</strong> {user.gender}</p>}
        {user.location && <p><strong>Location:</strong> {user.location}</p>}
        {user.profession && <p><strong>Profession:</strong> {user.profession}</p>}
        {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
      </div>
    </div>
  )
}

export default Profile
