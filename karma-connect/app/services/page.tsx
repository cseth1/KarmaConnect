import Link from "next/link"
import { Filter, Heart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Heart className="h-5 w-5 text-primary" />
            <Link href="/">KarmaConnect</Link>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground transition-colors">
              Browse Services
            </Link>
            <Link
              href="/messages"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Messages
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Browse Services</h1>
              <p className="text-muted-foreground">Find skilled professionals offering free services</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-64">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="writing">Writing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Availability</label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Availability</SelectItem>
                        <SelectItem value="high">High (5+ hours/week)</SelectItem>
                        <SelectItem value="medium">Medium (2-5 hours/week)</SelectItem>
                        <SelectItem value="low">Low (0-2 hours/week)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rating</label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Select minimum rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search services..." className="w-full pl-8" />
                </div>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                          alt="User avatar"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <CardTitle className="text-base">
                            {
                              [
                                "Web Design Help",
                                "Logo Feedback",
                                "SEO Consultation",
                                "Content Writing",
                                "UI/UX Review",
                                "Social Media Strategy",
                                "Programming Help",
                                "Marketing Advice",
                                "Business Mentoring",
                              ][i % 9]
                            }
                          </CardTitle>
                          <CardDescription>
                            {
                              [
                                "Alex Morgan",
                                "Jamie Smith",
                                "Taylor Wong",
                                "Jordan Lee",
                                "Casey Johnson",
                                "Riley Brown",
                                "Sam Davis",
                                "Quinn Wilson",
                                "Avery Martinez",
                              ][i % 9]
                            }
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>
                          {
                            [
                              "Design",
                              "Design",
                              "Marketing",
                              "Writing",
                              "Design",
                              "Marketing",
                              "Development",
                              "Marketing",
                              "Business",
                            ][i % 9]
                          }
                        </span>
                        <span>•</span>
                        <span>{[4.9, 4.7, 4.8, 4.6, 4.9, 4.5, 4.8, 4.7, 4.9][i % 9]} ★</span>
                        <span>•</span>
                        <span>{[3, 2, 5, 4, 2, 3, 5, 2, 3][i % 9]} hrs/week</span>
                      </div>
                      <p className="mt-4 text-sm">
                        {
                          [
                            "I'll help you improve your website design with professional feedback and suggestions.",
                            "Get expert feedback on your logo design to make it more professional and memorable.",
                            "Learn how to optimize your website for search engines and improve your rankings.",
                            "I'll help you create engaging content for your blog, website, or social media.",
                            "Get a comprehensive review of your user interface and experience design.",
                            "Learn how to build an effective social media strategy for your business or personal brand.",
                            "Get help with programming problems or learn new coding skills.",
                            "Receive personalized marketing advice to help grow your business or project.",
                            "Business mentoring for startups and small businesses looking to grow.",
                          ][i % 9]
                        }
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Request Help</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                <Button variant="outline" size="icon">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <span>...</span>
                <Button variant="outline" size="icon">
                  8
                </Button>
              </div>
            </div>
          </div>
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

