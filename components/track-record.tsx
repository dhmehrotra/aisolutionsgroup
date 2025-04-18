export default function TrackRecord() {
  const stages = [
    {
      title: "0→1",
      companies: [
        { name: "SVB NextGen Incubator", logo: "svb-nextgen-logo" },
        { name: "Mercari", logo: "mercari-logo" },
      ],
    },
    {
      title: "Scale",
      companies: [
        { name: "Google", logo: "google-logo" },
        { name: "Intuit", logo: "intuit-logo" },
        { name: "Walmart Labs", logo: "walmart-logo" },
      ],
    },
    {
      title: "Turnaround",
      companies: [{ name: "Wish", logo: "wish-logo" }],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {stages.map((stage) => (
        <div key={stage.title} className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{stage.title}</h3>
          <div className="space-y-8 w-full">
            {stage.companies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-50 rounded-lg hover:shadow-sm transition-shadow duration-200"
              >
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={`/abstract-geometric-shapes.png?height=48&width=160&query=${company.logo}+grayscale+professional`}
                    alt={`${company.name} logo`}
                    className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
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
