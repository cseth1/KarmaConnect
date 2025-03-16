import Link from "next/link"
import { ArrowRight, Award, Briefcase, CheckCircle, Heart, Star } from "lucide-react"

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
                    Help Others. Build Your Portfolio.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    For students, bootcamp grads, and anyone building career skills. Gain real-world experience while
                    helping others.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Gain real-world project experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Earn testimonials and endorsements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Boost your resume & stand out to employers</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup?type=giver">
                    <Button size="lg" className="gap-1">
                      Offer Skills <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/signup?type=receiver">
                    <Button size="lg" variant="outline">
                      Request Help
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
                            <span className="mx-1">•</span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Junior Pro
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        "I'm offering free website design consultations for non-profits and small businesses. Looking to
                        expand my portfolio with e-commerce projects."
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">UI Design</span>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Responsive</span>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Figma</span>
                      </div>
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

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build your portfolio while helping others in three simple steps
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
                  Highlight your skills, experience level, and what you want to add to your portfolio.
                </p>
                <img
                  src="/placeholder.svg?height=150&width=250&text=Profile+Screenshot"
                  alt="Profile creation"
                  className="rounded-lg border shadow-sm mt-2"
                />
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Complete Projects</h3>
                <p className="text-center text-muted-foreground">
                  Offer your skills or find help. Collaborate on real-world projects that build your experience.
                </p>
                <img
                  src="/placeholder.svg?height=150&width=250&text=Project+Screenshot"
                  alt="Project collaboration"
                  className="rounded-lg border shadow-sm mt-2"
                />
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Showcase Results</h3>
                <p className="text-center text-muted-foreground">
                  Add completed work to your portfolio and collect testimonials to boost your resume.
                </p>
                <img
                  src="/placeholder.svg?height=150&width=250&text=Portfolio+Screenshot"
                  alt="Portfolio showcase"
                  className="rounded-lg border shadow-sm mt-2"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Build Your Career While Doing Good
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform helps you gain real-world experience, build your portfolio, and make meaningful
                  connections.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Portfolio Builder</h3>
                <p className="text-center text-muted-foreground">
                  Showcase your completed projects, upload work samples, and highlight client testimonials.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Skill Endorsements</h3>
                <p className="text-center text-muted-foreground">
                  Earn verified skill badges and endorsements from real clients that you can add to your resume.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Experience Points</h3>
                <p className="text-center text-muted-foreground">
                  Track your growth with XP, unlock achievements, and gain access to exclusive opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how others have boosted their careers through KarmaConnect
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="User avatar"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                  </div>
                </div>
                <p className="mb-4">
                  "After completing 5 projects on KarmaConnect, I added them to my portfolio and landed my first junior
                  designer role. The testimonials from real clients made all the difference in my interviews."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    8 Projects Completed
                  </span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">12 Endorsements</span>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="User avatar"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">Web Developer</p>
                  </div>
                </div>
                <p className="mb-4">
                  "As a bootcamp graduate, I needed real projects for my portfolio. Through KarmaConnect, I built
                  websites for 3 non-profits and got hired within 2 months. The experience was invaluable."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    6 Projects Completed
                  </span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">9 Endorsements</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start for free and upgrade when you need more features
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
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Basic portfolio and project showcase
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Up to 3 active service listings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Collect testimonials and endorsements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Track completed projects and XP
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  RECOMMENDED
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For serious portfolio builders</p>
                </div>
                <div className="mt-4 text-4xl font-bold">$9.99</div>
                <p className="mt-2 text-muted-foreground">per month</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Everything in Free
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Unlimited service listings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Featured profile in search results
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Advanced portfolio analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    "Verified Pro" badge for credibility
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Access to exclusive career resources
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=pro">
                    <Button className="w-full" variant="default">
                      Upgrade to Pro
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Build Your Portfolio?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students and professionals who are gaining real-world experience while helping
                  others.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup?type=giver">
                  <Button size="lg">Offer Skills</Button>
                </Link>
                <Link href="/signup?type=receiver">
                  <Button size="lg" variant="outline">
                    Request Help
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

