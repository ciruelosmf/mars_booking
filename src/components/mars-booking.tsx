'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Rocket, Calendar, User, CreditCard, Info } from 'lucide-react'

export default function MarsBooking() {
  const [step, setStep] = useState(1)
  const [selectedFlight, setSelectedFlight] = useState('')
  const [passengers, setPassengers] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="p-4 bg-gray-900">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-mono">SpaceX Mars Journeys</h1>
          <div className="space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 p-4">
        {/* Hero Section */}
        {step === 1 && (
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Book Your Journey to Mars</h2>
            <p className="text-xl mb-8">Experience the Red Planet like never before</p>
            <Button onClick={nextStep} size="lg" className="bg-red-600 hover:bg-red-700">
              Start Booking
            </Button>
          </section>
        )}

        {/* Flight Selection */}
        {step === 2 && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Select Your Flight</h3>
            <RadioGroup value={selectedFlight} onValueChange={setSelectedFlight} className="space-y-4">
              <div className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg">
                <RadioGroupItem value="early-2025" id="early-2025" />
                <Label htmlFor="early-2025" className="flex-grow">
                  <span className="font-bold">Early 2025 Launch</span>
                  <span className="block text-sm text-gray-400">Departs: March 15, 2025</span>
                </Label>
                <span className="text-lg font-bold">$75,000,000</span>
              </div>
              <div className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg">
                <RadioGroupItem value="late-2025" id="late-2025" />
                <Label htmlFor="late-2025" className="flex-grow">
                  <span className="font-bold">Late 2025 Launch</span>
                  <span className="block text-sm text-gray-400">Departs: November 3, 2025</span>
                </Label>
                <span className="text-lg font-bold">$82,000,000</span>
              </div>
              <div className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg">
                <RadioGroupItem value="early-2026" id="early-2026" />
                <Label htmlFor="early-2026" className="flex-grow">
                  <span className="font-bold">Early 2026 Launch</span>
                  <span className="block text-sm text-gray-400">Departs: April 7, 2026</span>
                </Label>
                <span className="text-lg font-bold">$78,500,000</span>
              </div>
            </RadioGroup>
            <div className="mt-8 flex justify-between">
              <Button onClick={prevStep} variant="outline">Back</Button>
              <Button onClick={nextStep} disabled={!selectedFlight}>Next</Button>
            </div>
          </section>
        )}

        {/* Passenger Information */}
        {step === 3 && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Passenger Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-gray-800 border-gray-700" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-800 border-gray-700" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-gray-800 border-gray-700" />
              </div>
              <div>
                <Label>Number of Passengers</Label>
                <Slider
                  value={[passengers]}
                  onValueChange={(value) => setPassengers(value[0])}
                  max={4}
                  step={1}
                  className="my-4"
                />
                <span>{passengers} passenger{passengers > 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <Button onClick={prevStep} variant="outline">Back</Button>
              <Button onClick={nextStep}>Next</Button>
            </div>
          </section>
        )}

        {/* Mission Details */}
        {step === 4 && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Mission Details</h3>
            <div className="bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-4">
                <Rocket className="w-6 h-6 text-red-500" />
                <div>
                  <h4 className="font-bold">Spacecraft</h4>
                  <p>SpaceX Starship</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-red-500" />
                <div>
                  <h4 className="font-bold">Journey Duration</h4>
                  <p>6-8 months</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <User className="w-6 h-6 text-red-500" />
                <div>
                  <h4 className="font-bold">Crew</h4>
                  <p>Experienced astronauts and mission specialists</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Info className="w-6 h-6 text-red-500" />
                <div>
                  <h4 className="font-bold">Mission Objective</h4>
                  <p>Establish first human settlement on Mars</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <Button onClick={prevStep} variant="outline">Back</Button>
              <Button onClick={nextStep}>Next</Button>
            </div>
          </section>
        )}

        {/* Payment */}
        {step === 5 && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Payment</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="bg-gray-800 border-gray-700" />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="flex-1">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" className="bg-gray-800 border-gray-700" />
                </div>
              </div>
              <div>
                <Label htmlFor="name-on-card">Name on Card</Label>
                <Input id="name-on-card" placeholder="John Doe" className="bg-gray-800 border-gray-700" />
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-bold mb-2">Total Cost</h4>
              <p className="text-2xl font-bold">${(75000000 * passengers).toLocaleString()}</p>
              <p className="text-sm text-gray-400">For {passengers} passenger{passengers > 1 ? 's' : ''}</p>
            </div>
            <div className="mt-8 flex justify-between">
              <Button onClick={prevStep} variant="outline">Back</Button>
              <Button onClick={() => alert('Booking confirmed! Get ready for Mars!')} className="bg-red-600 hover:bg-red-700">
                Confirm Booking
              </Button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 p-4 mt-12">
        <div className="container mx-auto text-center text-sm text-gray-400">
          &copy; 2024 SpaceX Mars Journeys. All rights reserved.
        </div>
      </footer>
    </div>
  )
}