"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in real implementation
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#161735] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#161735] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-[#161735] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Project Request">Project Request</option>
          <option value="Partnership">Partnership</option>
          <option value="Career">Career</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-[#161735] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
        ></textarea>
      </div>
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
        Send Message
      </Button>
    </form>
  )
}

