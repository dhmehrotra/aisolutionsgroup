export default function LogoBanner() {
  const logos = [
    { name: "Wish", alt: "Wish logo" },
    { name: "SVB NextGen", alt: "SVB NextGen logo" },
    { name: "Mercari", alt: "Mercari logo" },
    { name: "Google", alt: "Google logo" },
    { name: "Intuit", alt: "Intuit logo" },
    { name: "Walmart", alt: "Walmart logo" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center justify-center h-12 grayscale opacity-70 hover:opacity-100 transition-opacity"
        >
          <img
            src={`/abstract-geometric-shapes.png?height=48&width=120&query=${logo.name}+logo+grayscale`}
            alt={logo.alt}
            className="h-8 md:h-10 object-contain"
          />
        </div>
      ))}
    </div>
  )
}
