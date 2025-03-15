import Link from "next/link"
import { ArrowRight, Award, Heart, Search, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Heart className="h-5 w-5 text-primary" />
            <span>KarmaConnect</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Give Help. Get Recognition.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with people who need your skills. Offer free services, build your portfolio, and earn karma
                    points.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup?type=giver">
                    <Button size="lg" className="gap-1">
                      Offer Your Skills <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/signup?type=receiver">
                    <Button size="lg" variant="outline">
                      Find Help
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted p-8 flex flex-col justify-center">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-[80%]">
                      <div className="flex items-center gap-2 mb-4">
                        <img
                          src="/placeholder.svg?height=50&width=50"
                          alt="User avatar"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">Sarah Johnson</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                            <span>4.9</span>
                            <span className="mx-1">•</span>
                            <span>Web Designer</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        "I'm offering free website design consultations for non-profits and small businesses. Let me
                        help you improve your online presence!"
                      </p>
                      <Button size="sm" className="w-full">
                        Connect Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Turn Good Karma Into Real Benefits
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform helps you connect, collaborate, and grow your professional network while doing good.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Matching</h3>
                <p className="text-center text-muted-foreground">
                  Our algorithm connects you with the perfect match based on skills, availability, and needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Verified Reviews</h3>
                <p className="text-center text-muted-foreground">
                  Build credibility with authentic testimonials and ratings from people you've helped.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Karma Points</h3>
                <p className="text-center text-muted-foreground">
                  Earn recognition for your contributions and unlock premium features as you help more people.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to start giving or receiving help on our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-center text-muted-foreground">
                  Sign up and specify whether you want to offer services or find help. Complete your profile with skills
                  and availability.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Connect & Collaborate</h3>
                <p className="text-center text-muted-foreground">
                  Browse listings, send messages, and schedule sessions. Our platform makes it easy to find the perfect
                  match.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Give Feedback</h3>
                <p className="text-center text-muted-foreground">
                  After collaboration, leave reviews and ratings to help others and build your reputation on the
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start for free and upgrade when you need more features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 text-4xl font-bold">$0</div>
                <p className="mt-2 text-muted-foreground">Forever free</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Basic profile and listings
                  </li>
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Up to 3 active service listings
                  </li>
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Standard search visibility
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <p className="text-muted-foreground">For serious contributors</p>
                </div>
                <div className="mt-4 text-4xl font-bold">$9.99</div>
                <p className="mt-2 text-muted-foreground">per month</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Everything in Free
                  </li>
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Unlimited service listings
                  </li>
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Priority in search results
                  </li>
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <Search className="mr-2 h-4 w-4 text-primary" />
                    "Verified Premium" badge
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=premium">
                    <Button className="w-full" variant="outline">
                      Upgrade to Premium
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Start Your Karma Journey?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of people who are already giving and receiving help on our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup?type=giver">
                  <Button size="lg">Become a Giver</Button>
                </Link>
                <Link href="/signup?type=receiver">
                  <Button size="lg" variant="outline">
                    Find a Giver
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

