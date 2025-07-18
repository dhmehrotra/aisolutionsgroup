import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  LightbulbIcon,
  RocketIcon,
  UsersIcon,
  BarChartIcon,
  ArrowRightIcon,
  CalendarIcon,
  SearchIcon,
  CodeIcon,
  BookOpenIcon,
  BotIcon,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import CollectiveExperience from "@/components/collective-experience"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] max-w-4xl">
              AI Product Strategy Meets Execution
            </h1>
            <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
              We help startups, enterprises, and investors build AI-powered products that win—by bridging the gap
              between vision and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                className="bg-[#3B6F9C] hover:bg-[#2E5A80] text-white px-8 py-6 h-auto text-base"
                size="lg"
                asChild
              >
                <a href="#contact">Let's Talk</a>
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 px-8 py-6 h-auto text-base bg-transparent"
                size="lg"
                asChild
              >
                <a href="https://zcal.co/mehrotra" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section id="services" className="w-full py-24 md:py-32 bg-[#FAFAFA]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A1A1A]">
              Consulting Services
            </h2>
          </div>

          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <LightbulbIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">AI Product Strategy</h3>
                <p className="text-gray-600">From scoping to feasibility — craft smarter, sharper products.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <RocketIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Go-to-Market Acceleration</h3>
                <p className="text-gray-600">Nail your narrative, test pilots, and drive traction.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <UsersIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Fractional Product Leadership</h3>
                <p className="text-gray-600">Interim product exec to drive clarity, velocity, and delivery.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <BarChartIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Investor Advisory</h3>
                <p className="text-gray-600">Evaluate risk, roadmap, and AI readiness.</p>
              </CardContent>
            </Card>
          </div>

          {/* Second row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <SearchIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">AI Readiness & Discovery Sprints</h3>
                <p className="text-gray-600">
                  Pinpoint high-impact AI use cases and build a pragmatic adoption roadmap.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <CodeIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Custom GPTs & Internal Enablement</h3>
                <p className="text-gray-600">
                  Deploy GPTs with robust prompt architecture, RAG pipelines, and evaluation frameworks. Train
                  superusers and streamline workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <BotIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Custom AI Agents</h3>
                <p className="text-gray-600">
                  Build autonomous agents to handle customers, knowledge, and workflows — scalable with your business
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                  <BookOpenIcon className="h-8 w-8 text-[#3B6F9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">AI Coach</h3>
                <p className="text-gray-600">
                  Stay ahead of the AI curve. Personalized guidance, custom workflows, and expert insight tailored to
                  your professional goals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-16">
            <p className="text-xl font-medium text-gray-700 italic">
              Smarter Decisions. Stronger Products. Faster Growth.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="w-full py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A1A1A]">
              Clients We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="p-3 bg-[#3B6F9C]/10 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#3B6F9C]"
                >
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Startups</h3>
              <p className="text-gray-600">From prototype to PMF — we help you prioritize and launch.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="p-3 bg-[#3B6F9C]/10 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#3B6F9C]"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Enterprises</h3>
              <p className="text-gray-600">Modernize with AI to unlock internal workflows and efficiency.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="p-3 bg-[#3B6F9C]/10 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#3B6F9C]"
                >
                  <path d="M12 2v6.5" />
                  <path d="M18.4 6.5 13.5 9" />
                  <path d="M8.4 14 3.5 16.5" />
                  <path d="M3.5 7.5 8.4 10" />
                  <path d="M13.5 15 18.4 17.5" />
                  <path d="M12 15.5V22" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Investors</h3>
              <p className="text-gray-600">Evaluate product-market fit, roadmap feasibility, and opportunity size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Select Engagements Section */}
      <section id="engagements" className="w-full py-24 md:py-32 bg-[#FAFAFA]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A1A1A]">
              Representative Engagements
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex flex-col space-y-4 bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A]">
                Investment Due Diligence & Enterprise AI PMF Validation
              </h3>
              <p className="text-gray-600">
                Conducted opportunity mapping and business case validation for a $150M private equity investment in
                agentic AI solutions. Led product-market fit analysis for AI agents across retail (campaign management,
                merchandising, growth workflows) and CPG (RGM, trade promotion, and revenue simulation processes).
              </p>
              <a href="#" className="text-[#3B6F9C] font-medium flex items-center gap-1 group w-fit">
                Learn more <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col space-y-4 bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A]">GTM Advise for B2B AI startups</h3>
              <p className="text-gray-600">
                Provided advisory services for various vertical AI startups in SEO/conversion, analytics, and catalog
                intelligence verticals.
              </p>
              <a href="#" className="text-[#3B6F9C] font-medium flex items-center gap-1 group w-fit">
                Learn more <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col space-y-4 bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Fractional CPO, Travel Marketplace</h3>
              <p className="text-gray-600">
                Established product processes and led strategic pivot toward GenAI-powered experiences.
              </p>
              <a href="#" className="text-[#3B6F9C] font-medium flex items-center gap-1 group w-fit">
                Learn more <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col space-y-4 bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Growth Strategy, E-comm Marketplace (5M+ MAUs)</h3>
              <p className="text-gray-600">Drove retention, personalization, and user engagement.</p>
              <a href="#" className="text-[#3B6F9C] font-medium flex items-center gap-1 group w-fit">
                Learn more <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collective Experience Section */}
      <section className="w-full py-24 md:py-32 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A1A1A]">
              Our Collective Experience
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed max-w-[800px]">
              B2B and B2C leadership across early innovation, global scale, and turnaround initiatives.
            </p>
          </div>
          <CollectiveExperience />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="w-full py-24 md:py-32 bg-[#FAFAFA]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A1A1A]">
              Let's Collaborate
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed max-w-[700px]">
              Whether you're building, scaling, or assessing an AI product, we're here to help.
            </p>
          </div>
          <div className="mx-auto max-w-lg">
            <ContactForm />
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 gap-2 px-8 py-6 h-auto text-base bg-transparent"
                asChild
              >
                <a href="https://zcal.co/mehrotra" target="_blank" rel="noopener noreferrer">
                  Schedule a Call <CalendarIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
