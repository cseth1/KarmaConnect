import Link from "next/link"
import {
  Award,
  Bell,
  BookOpen,
  Heart,
  LineChart,
  MessageSquare,
  Plus,
  Search,
  Settings,
  User,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Link href="/create-listing">
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Listing
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Strength</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <Progress value={75} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Add project samples and testimonials to reach 100%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Experience Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245 XP</div>
                <div className="flex items-center mt-2">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[65%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">55 XP until "Experienced Helper" badge</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  32 <span className="text-sm text-muted-foreground">this week</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500 mt-2">
                  <span>↑ 12%</span>
                  <span className="text-muted-foreground">vs last week</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="my-listings" className="mt-6">
            <TabsList>
              <TabsTrigger value="my-listings">My Listings</TabsTrigger>
              <TabsTrigger value="active-projects">Active Projects</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UI Design</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UX</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Responsive</span>
                    </div>
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Branding</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Logo Design</span>
                    </div>
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
                    <Link href="/create-listing">
                      <Button>Create Listing</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="active-projects" className="mt-6">
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
                    <div className="mt-4 bg-muted/50 p-2 rounded-md">
                      <div className="text-xs font-medium">Project Status</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs">In Progress</span>
                        <span className="text-xs">75%</span>
                      </div>
                      <Progress value={75} className="h-1.5 mt-1" />
                    </div>
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
                    <div className="mt-4 bg-muted/50 p-2 rounded-md">
                      <div className="text-xs font-medium">Project Status</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs">Waiting for Feedback</span>
                        <span className="text-xs">50%</span>
                      </div>
                      <Progress value={50} className="h-1.5 mt-1" />
                    </div>
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
                    <div className="mt-4 bg-muted/50 p-2 rounded-md">
                      <div className="text-xs font-medium">Project Details</div>
                      <div className="mt-1 text-xs">
                        <div>
                          <span className="font-medium">Timeline:</span> Flexible
                        </div>
                        <div>
                          <span className="font-medium">Deliverable:</span> Website redesign
                        </div>
                      </div>
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
                    <div className="mt-4 bg-muted/50 p-2 rounded-md">
                      <div className="text-xs font-medium">Project Details</div>
                      <div className="mt-1 text-xs">
                        <div>
                          <span className="font-medium">Timeline:</span> Soon (Within 2 weeks)
                        </div>
                        <div>
                          <span className="font-medium">Deliverable:</span> Logo feedback document
                        </div>
                      </div>
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
            <TabsContent value="portfolio" className="mt-6">
              <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Portfolio</CardTitle>
                      <CardDescription>Showcase your completed projects and work samples</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="rounded-lg border">
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <img
                            src="/placeholder.svg?height=200&width=400&text=Project+1"
                            alt="Portfolio project 1"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">Eco Store Redesign</h3>
                          <p className="text-sm text-muted-foreground">E-commerce Website</p>
                          <p className="mt-2 text-sm">
                            Redesigned an eco-friendly product store to improve user experience and increase
                            conversions.
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UI Design</span>
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full">E-commerce</span>
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Figma</span>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button size="sm">View Project</Button>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border">
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <img
                            src="/placeholder.svg?height=200&width=400&text=Project+2"
                            alt="Portfolio project 2"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">Non-profit Website</h3>
                          <p className="text-sm text-muted-foreground">Website Design</p>
                          <p className="mt-2 text-sm">
                            Designed a modern website for a local non-profit organization to increase donations and
                            volunteer sign-ups.
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Web Design</span>
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Non-profit</span>
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Responsive</span>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button size="sm">View Project</Button>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-dashed p-6 flex flex-col items-center justify-center text-center">
                        <Plus className="h-8 w-8 text-muted-foreground" />
                        <h3 className="mt-2 font-medium">Add Project</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Showcase your work by adding completed projects to your portfolio
                        </p>
                        <Button className="mt-4">Add Project</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Projects</span>
                        </div>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Testimonials</span>
                        </div>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Profile Views</span>
                        </div>
                        <span className="font-medium">124</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Testimonials</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <img
                            src="/placeholder.svg?height=30&width=30"
                            alt="Client avatar"
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium">John Doe</div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-xs">
                          "Sarah provided incredibly helpful feedback on my website design. The suggestions were
                          practical and made a huge difference."
                        </p>
                      </div>

                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <img
                            src="/placeholder.svg?height=30&width=30"
                            alt="Client avatar"
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium">Emily Chen</div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-xs">
                          "Working with Sarah was a great experience. She took the time to understand my needs and
                          provided detailed advice."
                        </p>
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        View All Testimonials
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
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

