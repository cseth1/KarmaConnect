import Link from "next/link"
import { ArrowLeft, Award, Calendar, Mail, MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="container flex min-h-screen w-full flex-col py-8">
      <Link href="/services" className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="User avatar"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <h2 className="mt-4 text-xl font-bold">Alex Morgan</h2>
                <p className="text-sm text-muted-foreground">Web Designer & UI/UX Specialist</p>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Junior Pro</span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 text-sm font-medium">4.9</span>
                  <span className="text-sm text-muted-foreground">(24 reviews)</span>
                </div>
                <div className="mt-6 w-full">
                  <Button className="w-full">Request Help</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Contact via platform messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Member since March 2024</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills & Endorsements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">UI Design</span>
                    <span className="text-xs text-muted-foreground">12 endorsements</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-[80%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">UX Design</span>
                    <span className="text-xs text-muted-foreground">9 endorsements</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-[60%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Figma</span>
                    <span className="text-xs text-muted-foreground">15 endorsements</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-[90%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Responsive Design</span>
                    <span className="text-xs text-muted-foreground">7 endorsements</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-[50%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="rounded-full bg-muted px-3 py-1 text-xs">HTML/CSS</div>
                <div className="rounded-full bg-muted px-3 py-1 text-xs">Adobe XD</div>
                <div className="rounded-full bg-muted px-3 py-1 text-xs">Wireframing</div>
                <div className="rounded-full bg-muted px-3 py-1 text-xs">Prototyping</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium">Top Rated Designer</div>
                  <div className="text-xs text-muted-foreground">Maintained 4.8+ rating for 3 months</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium">Project Milestone</div>
                  <div className="text-xs text-muted-foreground">Completed 10+ projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Alex</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I'm a passionate web designer with over 5 years of experience creating beautiful, functional websites
                and user interfaces. I specialize in responsive design, user experience, and creating designs that not
                only look great but also convert visitors into customers.
              </p>
              <p className="mt-4">
                I've worked with startups, small businesses, and non-profits to help them establish a strong online
                presence. I'm excited to share my knowledge and help others improve their websites and digital products.
              </p>
              <p className="mt-4">
                When I'm not designing, I enjoy hiking, photography, and teaching design workshops at my local community
                college.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="portfolio">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            <TabsContent value="portfolio" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i}>
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img
                        src={`/placeholder.svg?height=200&width=400&text=Project ${i + 1}`}
                        alt={`Portfolio project ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>
                        {["Eco Store Redesign", "Fitness App UI", "Non-profit Website", "Travel Blog Design"][i % 4]}
                      </CardTitle>
                      <CardDescription>{["E-commerce", "Mobile App", "Website", "Blog"][i % 4]}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        {
                          [
                            "Redesigned an eco-friendly product store to improve user experience and increase conversions.",
                            "Created a clean, intuitive UI for a fitness tracking mobile application.",
                            "Designed a modern website for a local non-profit organization to increase donations and volunteer sign-ups.",
                            "Developed a visually appealing blog design for a travel influencer.",
                          ][i % 4]
                        }
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          ["UI Design", "E-commerce", "Figma"],
                          ["Mobile UI", "App Design", "Prototyping"],
                          ["Web Design", "Non-profit", "Responsive"],
                          ["Blog Design", "WordPress", "Branding"],
                        ][i % 4].map((tag, j) => (
                          <span key={j} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        View Project
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="services" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Web Design Consultation</CardTitle>
                    <CardDescription>30-minute session to review your website and provide feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Design</span>
                      <span>•</span>
                      <span>3 hours/week</span>
                    </div>
                    <p className="mt-4 text-sm">
                      I'll help you identify design issues and suggest improvements for your website. Perfect for small
                      businesses and startups.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UI Design</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UX Review</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Feedback</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request This Service</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>UI/UX Review</CardTitle>
                    <CardDescription>Comprehensive review of your user interface and experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Design</span>
                      <span>•</span>
                      <span>2 hours/week</span>
                    </div>
                    <p className="mt-4 text-sm">
                      Get a detailed analysis of your user interface and experience with actionable recommendations for
                      improvement.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UX Design</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Usability</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Analysis</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request This Service</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="testimonials" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Testimonials</CardTitle>
                  <CardDescription>What people are saying about Alex's services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-2 border-b pb-4 last:border-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                            alt="Reviewer avatar"
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">
                              {["Sarah Johnson", "Michael Chen", "Emily Rodriguez"][i % 3]}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {["March 10, 2025", "February 28, 2025", "February 15, 2025"][i % 3]}
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium">Project:</span>
                          <span className="text-xs">
                            {["Website Redesign", "Mobile App UI", "E-commerce Site"][i % 3]}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium">Skills:</span>
                          <div className="flex flex-wrap gap-1">
                            {[
                              ["UI Design", "UX Design", "Responsive"],
                              ["Mobile UI", "Prototyping", "Figma"],
                              ["E-commerce", "Web Design", "Branding"],
                            ][i % 3].map((skill, j) => (
                              <span key={j} className="text-xs bg-muted px-1.5 py-0.5 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm">
                        {
                          [
                            "Alex provided incredibly helpful feedback on my website design. The suggestions were practical and made a huge difference in how my site looks and functions. Highly recommended!",
                            "Working with Alex was a great experience. They took the time to understand my needs and provided detailed, actionable advice that I could implement right away.",
                            "Alex went above and beyond with their UI/UX review. They identified issues I hadn't even noticed and provided clear solutions. My website is now much more user-friendly thanks to their help.",
                          ][i % 3]
                        }
                      </p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All 24 Testimonials
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

