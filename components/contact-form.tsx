"use client"

import type React from "react"

import { useState, useRef, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState({ message: "", status: "" })
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Form validation
    if (!formRef.current?.checkValidity()) {
      e.stopPropagation()
      formRef.current?.classList.add("was-validated")

      // Focus the first invalid element
      const invalidElement = formRef.current?.querySelector(":invalid") as HTMLElement
      invalidElement?.focus()
      return
    }

    setIsSubmitting(true)
    setResult({ message: "Please wait...", status: "pending" })

    // Prepare form data for submission
    const formData = {
      ...formState,
      access_key: "e20a5f1e-fad7-49c4-8390-7a368d016555", // Your web3forms access key
      from_name: "AI Solutions Group Contact Form",
      subject: "New Contact Form Submission - AI Solutions Group",
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.status === 200) {
        setResult({ message: data.message, status: "success" })
        // Reset form
        setFormState({
          name: "",
          email: "",
          message: "",
        })
        formRef.current?.reset()
        formRef.current?.classList.remove("was-validated")
      } else {
        console.log(response)
        setResult({ message: data.message || "Something went wrong!", status: "error" })
      }
    } catch (error) {
      console.error(error)
      setResult({ message: "Something went wrong!", status: "error" })
    } finally {
      setIsSubmitting(false)

      // Hide the result message after 5 seconds
      setTimeout(() => {
        setResult({ message: "", status: "" })
      }, 5000)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 needs-validation" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-900">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          value={formState.name}
          onChange={handleChange}
          required
          className="border-gray-300 focus:border-[#3B6F9C] focus:ring-[#3B6F9C] h-12"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-900">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          value={formState.email}
          onChange={handleChange}
          required
          className="border-gray-300 focus:border-[#3B6F9C] focus:ring-[#3B6F9C] h-12"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-900">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          value={formState.message}
          onChange={handleChange}
          required
          className="min-h-[150px] border-gray-300 focus:border-[#3B6F9C] focus:ring-[#3B6F9C]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#3B6F9C] hover:bg-[#2E5A80] text-white py-6 h-auto text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>

      {result.message && (
        <div
          id="result"
          className={`p-4 border rounded-md text-center ${
            result.status === "success"
              ? "bg-[#3B6F9C]/10 border-[#3B6F9C]/20 text-[#3B6F9C]"
              : result.status === "error"
                ? "bg-red-50 border-red-100 text-red-600"
                : "text-gray-500"
          }`}
        >
          {result.message}
        </div>
      )}
    </form>
  )
}
