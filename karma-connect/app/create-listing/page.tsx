"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CreateListingPage() {
  const [formStep, setFormStep] = useState(1)

  const goToNextStep = () => {
    setFormStep(formStep + 1)
  }

  const goToPreviousStep = () => {
    setFormStep(formStep - 1)
  }

  return (
    <div className="container flex min-h-screen w-full flex-col py-8">
      <Link href="/dashboard" className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 font-bold">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-2xl">KarmaConnect</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold">Create a New Service Listing</h1>
          <p className="mt-2 text-muted-foreground">Share your skills and help others while building your portfolio</p>
        </div>

        <div className="mb-8 flex justify-between">
          <div
            className={`flex flex-1 flex-col items-center ${formStep >= 1 ? "text-primary" : "text-muted-foreground"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${formStep >= 1 ? "bg-primary text-primary-foreground" : "border border-muted-foreground"}`}
            >
              1
            </div>
            <span className="mt-2 text-sm">Basic Info</span>
          </div>
          <div className="flex flex-1 items-center">
            <div className={`h-1 w-full ${formStep >= 2 ? "bg-primary" : "bg-muted"}`}></div>
          </div>
          <div
            className={`flex flex-1 flex-col items-center ${formStep >= 2 ? "text-primary" : "text-muted-foreground"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${formStep >= 2 ? "bg-primary text-primary-foreground" : "border border-muted-foreground"}`}
            >
              2
            </div>
            <span className="mt-2 text-sm">Details</span>
          </div>
          <div className="flex flex-1 items-center">
            <div className={`h-1 w-full ${formStep >= 3 ? "bg-primary" : "bg-muted"}`}></div>
          </div>
          <div
            className={`flex flex-1 flex-col items-center ${formStep >= 3 ? "text-primary" : "text-muted-foreground"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${formStep >= 3 ? "bg-primary text-primary-foreground" : "border border-muted-foreground"}`}
            >
              3
            </div>
            <span className="mt-2 text-sm">Review</span>
          </div>
        </div>

        {formStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Let's start with the basics of your service offering</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Service Title</Label>
                <Input id="title" placeholder="e.g., Web Design Consultation, Logo Feedback" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue="design">
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability (hours per week)</Label>
                <Select defaultValue="2">
                  <SelectTrigger id="availability">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour/week</SelectItem>
                    <SelectItem value="2">2 hours/week</SelectItem>
                    <SelectItem value="5">5 hours/week</SelectItem>
                    <SelectItem value="10">10+ hours/week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={goToNextStep}>Continue</Button>
            </CardFooter>
          </Card>
        )}

        {formStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
              <CardDescription>Provide more information about your service</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you're offering, who it's for, and what they can expect"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Your Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Briefly describe your experience and qualifications related to this service"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectations">What You Need From Recipients</Label>
                <Textarea
                  id="expectations"
                  placeholder="What do you need from people who request your help? Any specific information or materials?"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back
              </Button>
              <Button onClick={goToNextStep}>Continue</Button>
            </CardFooter>
          </Card>
        )}

        {formStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Review Your Listing</CardTitle>
              <CardDescription>Make sure everything looks good before publishing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-semibold">Web Design Consultation</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Design</span>
                  <span>•</span>
                  <span>2 hours/week</span>
                </div>
                <p className="mt-4">
                  I'll help you improve your website design with professional feedback and suggestions. Perfect for
                  small businesses and startups looking to enhance their online presence.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Experience:</h4>
                  <p className="mt-1 text-sm">
                    5+ years of experience as a UI/UX designer working with various clients from startups to established
                    businesses.
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">What I Need From You:</h4>
                  <p className="mt-1 text-sm">
                    Access to your current website, information about your target audience, and any specific areas you'd
                    like me to focus on.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-dashed p-4 text-center">
                <p className="text-muted-foreground">
                  By publishing this listing, you agree to our community guidelines and terms of service.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back
              </Button>
              <Button>Publish Listing</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

