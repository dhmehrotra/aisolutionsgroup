export default function CollectiveExperience() {
  const companyLogos = [
    {
      name: "LinkedIn",
      logo: "/logos/linkedin-logo.png",
      alt: "LinkedIn logo",
      size: "default",
    },
    {
      name: "Yahoo!",
      logo: "/logos/yahoo-logo.jpeg",
      alt: "Yahoo! logo",
      size: "default",
    },
    {
      name: "Telefónica",
      logo: "/logos/telefonica-logo.png",
      alt: "Telefónica logo",
      size: "large",
    },
    {
      name: "Adobe",
      logo: "/logos/adobe-logo.png",
      alt: "Adobe logo",
      size: "default",
    },
    {
      name: "McKinsey & Company",
      logo: "/logos/mckinsey-logo.jpeg",
      alt: "McKinsey & Company logo",
      size: "default",
    },
    {
      name: "YuMe",
      logo: "/logos/yume-logo.jpeg",
      alt: "YuMe logo",
      size: "default",
    },
    {
      name: "Google",
      logo: "/logos/google-logo.png",
      alt: "Google logo",
      size: "small",
    },
    {
      name: "Intuit",
      logo: "/logos/intuit-logo.svg",
      alt: "Intuit logo",
      size: "small",
    },
    {
      name: "Walmart",
      logo: "/logos/walmart-labs-logo.png",
      alt: "Walmart logo",
      size: "default",
    },
    {
      name: "Wish",
      logo: "/logos/wish-logo.png",
      alt: "Wish logo",
      size: "default",
    },
    {
      name: "Mercari",
      logo: "/logos/mercari-logo.png",
      alt: "Mercari logo",
      size: "default",
    },
    {
      name: "SVB NextGen",
      logo: "/logos/svb-nextgen-logo.png",
      alt: "SVB NextGen logo",
      size: "extra-large",
    },
  ]

  const educationLogos = [
    {
      name: "MIT",
      logo: "/logos/mit-main-logo.png",
      alt: "MIT logo",
      size: "extra-large",
    },
    {
      name: "MIT Sloan",
      logo: "/logos/mit-sloan-new-logo.jpeg",
      alt: "MIT Sloan logo",
      size: "large",
    },
    {
      name: "Stanford University",
      logo: "/logos/stanford-logo.png",
      alt: "Stanford University logo",
      size: "default",
    },
    {
      name: "Georgia Tech",
      logo: "/logos/georgia-tech-logo.png",
      alt: "Georgia Tech logo",
      size: "default",
    },
    {
      name: "University of Texas at Austin",
      logo: "/logos/ut-austin-logo.webp",
      alt: "University of Texas at Austin logo",
      size: "extra-large",
    },
    {
      name: "BITS Pilani",
      logo: "/logos/bits-pilani-logo.png",
      alt: "BITS Pilani logo",
      size: "default",
    },
  ]

  const getLogoSize = (size: string) => {
    switch (size) {
      case "small":
        return "h-8 w-auto object-contain max-w-[120px]"
      case "large":
        return "h-16 w-auto object-contain max-w-[200px]"
      case "extra-large":
        return "h-20 w-auto object-contain max-w-[240px]"
      default:
        return "h-12 w-auto object-contain max-w-[160px]"
    }
  }

  return (
    <div className="space-y-16">
      {/* Company Logos Row */}
      <div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
          {companyLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-20 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img src={logo.logo || "/placeholder.svg"} alt={logo.alt} className={getLogoSize(logo.size)} />
            </div>
          ))}
        </div>
      </div>

      {/* Education Logos Row */}
      <div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
          {educationLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-20 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img src={logo.logo || "/placeholder.svg"} alt={logo.alt} className={getLogoSize(logo.size)} />
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="flex justify-center mt-12">
        <p className="text-lg font-medium text-gray-600 italic text-center max-w-4xl">
          Built by operators and advisors who've shaped products at the world's most iconic companies and universities.
        </p>
      </div>
    </div>
  )
}
