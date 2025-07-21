import React, { useState, useEffect } from "react";
import { useAuth } from "../components/contexts/AuthContext";

const Settings = () => {
  const { currentUser, accessToken } = useAuth(); // assume this gives JWT
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    profession: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        password: "",
        location: currentUser.location || "",
        profession: currentUser.profession || "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        name: formData.name,
        email: formData.email,
        location: formData.location,
        profession: formData.profession,
      };

      if (formData.password) {
        updatedData.password = formData.password;
      }

      const res = await fetch("http://localhost:8000/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Settings saved successfully");
      } else {
        alert(data.message || "Failed to update");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error saving settings");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Account Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="New Password"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Location"
        />
        <input
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Profession"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
