export default function ExperienceSection() {
  const stages = [
    {
      title: "0→1",
      companies: [
        {
          name: "Mercari",
          logo: "/logos/mercari-logo.png",
          alt: "Mercari logo",
          className: "",
        },
        {
          name: "SVB NextGen Incubator",
          logo: "/logos/svb-nextgen-logo.png",
          alt: "SVB NextGen Incubator logo",
          className: "svb-logo", // Special class for SVB logo
        },
      ],
    },
    {
      title: "Scale",
      companies: [
        {
          name: "Google",
          logo: "/logos/google-logo.png",
          alt: "Google logo",
          className: "",
        },
        {
          name: "Intuit",
          logo: "/logos/intuit-logo.svg",
          alt: "Intuit logo",
          className: "",
        },
        {
          name: "WalmartLabs",
          logo: "/logos/walmart-labs-logo.png",
          alt: "Walmart Labs logo",
          className: "",
        },
      ],
    },
    {
      title: "Turnaround",
      companies: [
        {
          name: "Wish",
          logo: "/logos/wish-logo.png",
          alt: "Wish logo",
          className: "",
        },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {stages.map((stage) => (
        <div key={stage.title} className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">{stage.title}</h3>
          <div className="space-y-8 w-full">
            {stage.companies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center space-y-2 p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="h-28 w-full flex items-center justify-center">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.alt}
                    className={`max-w-[240px] object-contain ${
                      company.name === "SVB NextGen Incubator" ? "h-20 w-auto" : "h-12"
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-500 font-medium">{stage.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
