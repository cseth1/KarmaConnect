"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Heart, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "giver"
  const [userType, setUserType] = useState(initialType)
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex items-center justify-center gap-2 font-bold">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-2xl">KarmaConnect</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Sign up to offer skills (building experience) or request help (get pro bono assistance)
          </p>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Let's start with the basics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label>I want to:</Label>
                <RadioGroup defaultValue={userType} onValueChange={setUserType}>
                  <div className="flex items-start space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="giver" id="giver" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="giver" className="font-medium">
                        Offer Skills
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I want to help others while building my portfolio and gaining experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="receiver" id="receiver" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="receiver" className="font-medium">
                        Request Help
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I need assistance with a project or task from skilled volunteers
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={nextStep}>
                Continue
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && userType === "giver" && (
          <Card>
            <CardHeader>
              <CardTitle>Professional Profile</CardTitle>
              <CardDescription>Tell us about your skills and experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input id="title" placeholder="e.g., Web Designer, Content Writer" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience-level">Experience Level</Label>
                <Select defaultValue="junior">
                  <SelectTrigger id="experience-level">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="junior">Junior Pro</SelectItem>
                    <SelectItem value="mid">Mid-Level Pro</SelectItem>
                    <SelectItem value="senior">Senior Pro</SelectItem>
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
                        <p className="max-w-xs">What types of projects do you want to add to your portfolio?</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea
                  id="portfolio-goals"
                  placeholder="e.g., I want to build a portfolio of e-commerce websites, or I need experience with content writing for tech companies"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Primary Skills</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-design" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-design">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-development" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-development">Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-marketing" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-marketing">Marketing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-writing" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-writing">Writing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-business" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-business">Business</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="skill-other" className="rounded border-muted-foreground" />
                    <Label htmlFor="skill-other">Other</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep}>Continue</Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && userType === "receiver" && (
          <Card>
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
              <CardDescription>Tell us what kind of help you're looking for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="organization">Organization/Company Name (Optional)</Label>
                <Input id="organization" placeholder="e.g., Acme Inc. or Personal Project" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type</Label>
                <Select defaultValue="website">
                  <SelectTrigger id="project-type">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="help-needed">What help do you need?</Label>
                <Textarea
                  id="help-needed"
                  placeholder="Describe the project or task you need help with"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select defaultValue="flexible">
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (ASAP)</SelectItem>
                    <SelectItem value="soon">Soon (Within 2 weeks)</SelectItem>
                    <SelectItem value="flexible">Flexible (No rush)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep}>Continue</Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Almost Done!</CardTitle>
              <CardDescription>Review your information and complete your registration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Account Type</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {userType === "giver" ? "Skill Provider (Portfolio Builder)" : "Help Requester"}
                  </p>
                </div>

                {userType === "giver" && (
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Professional Profile</h3>
                    <div className="mt-2 space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Title:</span> Web Designer
                      </p>
                      <p>
                        <span className="font-medium">Experience:</span> Junior Pro
                      </p>
                      <p>
                        <span className="font-medium">Portfolio Goals:</span> I want to build a portfolio of e-commerce
                        websites
                      </p>
                      <p>
                        <span className="font-medium">Skills:</span> Design, Development
                      </p>
                    </div>
                  </div>
                )}

                {userType === "receiver" && (
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Project Information</h3>
                    <div className="mt-2 space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Organization:</span> Personal Project
                      </p>
                      <p>
                        <span className="font-medium">Project Type:</span> Website
                      </p>
                      <p>
                        <span className="font-medium">Help Needed:</span> I need help designing a personal portfolio
                        website
                      </p>
                      <p>
                        <span className="font-medium">Timeline:</span> Flexible (No rush)
                      </p>
                    </div>
                  </div>
                )}

                <div className="rounded-lg border border-dashed p-4 text-center">
                  <p className="text-muted-foreground text-sm">
                    By creating an account, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button>Create Account</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

