"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
                <p className="text-xs text-muted-foreground">
                  Be specific about what you're offering to attract the right projects for your portfolio
                </p>
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
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="portfolio-goals">Portfolio Goals</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          What do you want to gain from this experience? What types of projects are you looking to add
                          to your portfolio?
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea
                  id="portfolio-goals"
                  placeholder="e.g., I want to expand my design portfolio with e-commerce projects, or I'm looking to gain experience in content writing for tech companies"
                />
                <p className="text-xs text-muted-foreground">
                  This helps potential clients understand what you're looking to gain from the experience
                </p>
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
                <Label htmlFor="deliverable">Exact Deliverable</Label>
                <Input
                  id="deliverable"
                  placeholder="e.g., One website design mockup, 5-page content strategy document"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Be specific about what you'll provide so it's clear what will be added to your portfolio
                </p>
              </div>
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
              <div className="space-y-2">
                <Label>Skills Used</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-ui" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-ui" className="text-sm">
                      UI Design
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-ux" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-ux" className="text-sm">
                      UX Design
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-figma" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-figma" className="text-sm">
                      Figma
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-responsive" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-responsive" className="text-sm">
                      Responsive
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-branding" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-branding" className="text-sm">
                      Branding
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-other" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-other" className="text-sm">
                      Other
                    </Label>
                  </div>
                </div>
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
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UI Design</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UX Design</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Figma</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Responsive</span>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium">Portfolio Goals:</div>
                  <p className="mt-1 text-sm">I want to expand my design portfolio with e-commerce projects.</p>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium">Deliverable:</div>
                  <p className="mt-1 text-sm">One website design mockup with feedback document</p>
                </div>
                <p className="mt-4">
                  I'll help you improve your website design with professional feedback and suggestions. Perfect for
                  small businesses and startups looking to enhance their online presence.
                </p>
                <div className="mt-4">
                  <div className="text-sm font-medium">Experience:</div>
                  <p className="mt-1 text-sm">
                    5+ years of experience as a UI/UX designer working with various clients from startups to established
                    businesses.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium">What I Need From You:</div>
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

