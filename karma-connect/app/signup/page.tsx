"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "giver"
  const [userType, setUserType] = useState(initialType)

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex items-center justify-center gap-2 font-bold">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-2xl">KarmaConnect</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
        </div>
        <Tabs defaultValue={userType} onValueChange={setUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="giver">I want to give help</TabsTrigger>
            <TabsTrigger value="receiver">I need help</TabsTrigger>
          </TabsList>
          <TabsContent value="giver">
            <Card>
              <CardHeader>
                <CardTitle>Giver Account</CardTitle>
                <CardDescription>Create an account to offer your skills and services for free.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="giver-name">Full Name</Label>
                  <Input id="giver-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="giver-email">Email</Label>
                  <Input id="giver-email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="giver-password">Password</Label>
                  <Input id="giver-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label>Primary Skill Category</Label>
                  <RadioGroup defaultValue="design">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="design" id="design" />
                      <Label htmlFor="design">Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="development" id="development" />
                      <Label htmlFor="development">Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="marketing" id="marketing" />
                      <Label htmlFor="marketing">Marketing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Giver Account</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="receiver">
            <Card>
              <CardHeader>
                <CardTitle>Receiver Account</CardTitle>
                <CardDescription>Create an account to find free help from skilled professionals.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="receiver-name">Full Name</Label>
                  <Input id="receiver-name" placeholder="Jane Smith" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiver-email">Email</Label>
                  <Input id="receiver-email" type="email" placeholder="jane@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiver-password">Password</Label>
                  <Input id="receiver-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label>What do you need help with?</Label>
                  <RadioGroup defaultValue="design">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="design" id="r-design" />
                      <Label htmlFor="r-design">Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="development" id="r-development" />
                      <Label htmlFor="r-development">Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="marketing" id="r-marketing" />
                      <Label htmlFor="r-marketing">Marketing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="r-other" />
                      <Label htmlFor="r-other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Receiver Account</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

