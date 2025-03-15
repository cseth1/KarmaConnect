import { Bell, Heart, MessageSquare, Plus, Search, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Heart className="h-5 w-5 text-primary" />
            <span>KarmaConnect</span>
          </div>
          <div className="hidden flex-1 items-center justify-center px-4 md:flex">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Sarah!</p>
            </div>
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Listing
              </Button>
            </div>
          </div>

          <Tabs defaultValue="my-listings" className="mt-6">
            <TabsList>
              <TabsTrigger value="my-listings">My Listings</TabsTrigger>
              <TabsTrigger value="active-connections">Active Connections</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
              <TabsTrigger value="karma-points">Karma Points</TabsTrigger>
            </TabsList>
            <TabsContent value="my-listings" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Web Design Consultation</CardTitle>
                    <CardDescription>30-minute session to review your website and provide feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Design</span>
                      <span>•</span>
                      <span>2 hours/week</span>
                    </div>
                    <p className="mt-4 text-sm">
                      I'll help you identify design issues and suggest improvements for your website. Perfect for small
                      businesses and startups.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">View Requests (3)</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Logo Feedback</CardTitle>
                    <CardDescription>Review your logo design and provide professional feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Design</span>
                      <span>•</span>
                      <span>1 hour/week</span>
                    </div>
                    <p className="mt-4 text-sm">
                      Get professional feedback on your logo design. I'll provide suggestions for improvements and help
                      you refine your brand identity.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">View Requests (1)</Button>
                  </CardFooter>
                </Card>
                <Card className="border-dashed">
                  <CardHeader className="flex flex-col items-center justify-center pt-6">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                    <CardTitle className="mt-2">Add New Listing</CardTitle>
                    <CardDescription>Offer a new service to help others</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center pb-6">
                    <Button>Create Listing</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="active-connections" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-base">John Doe</CardTitle>
                        <CardDescription>Web Design Consultation</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Started: March 10, 2025</span>
                      <span>•</span>
                      <span>2 sessions completed</span>
                    </div>
                    <p className="mt-4 text-sm">
                      Helping John redesign his portfolio website for his photography business.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Schedule
                    </Button>
                    <Button size="sm">Message</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-base">Emily Chen</CardTitle>
                        <CardDescription>Logo Feedback</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Started: March 12, 2025</span>
                      <span>•</span>
                      <span>1 session completed</span>
                    </div>
                    <p className="mt-4 text-sm">
                      Providing feedback on Emily's new logo design for her bakery business.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Schedule
                    </Button>
                    <Button size="sm">Message</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="requests" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-base">Michael Johnson</CardTitle>
                        <CardDescription>Web Design Consultation</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      "I'm starting a new fitness blog and would love some help with the design. I have a basic
                      WordPress site but need help making it look professional."
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Requested: March 14, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Decline
                    </Button>
                    <Button size="sm">Accept</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-base">Sarah Williams</CardTitle>
                        <CardDescription>Logo Feedback</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      "I've designed a logo for my new pet grooming business and would appreciate some professional
                      feedback before I finalize it."
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Requested: March 13, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Decline
                    </Button>
                    <Button size="sm">Accept</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="karma-points" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Karma Points</CardTitle>
                  <CardDescription>Track your contributions and rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-8">
                    <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-muted">
                      <div className="text-center">
                        <div className="text-4xl font-bold">245</div>
                        <div className="text-sm text-muted-foreground">Karma Points</div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-8 border-primary border-opacity-20"></div>
                      <div
                        className="absolute inset-0 rounded-full border-8 border-primary border-opacity-100"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)" }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">Sessions Completed</div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-sm text-muted-foreground">People Helped</div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">4.9</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <h3 className="mb-4 font-medium">Rewards Available</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <div className="font-medium">Premium Badge</div>
                          <div className="text-sm text-muted-foreground">Stand out in search results</div>
                        </div>
                        <Button size="sm" disabled>
                          300 Points
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <div className="font-medium">Featured Listing</div>
                          <div className="text-sm text-muted-foreground">1 week on homepage</div>
                        </div>
                        <Button size="sm">200 Points</Button>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Heart className="h-5 w-5 text-primary" />
            <span>KarmaConnect</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} KarmaConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

