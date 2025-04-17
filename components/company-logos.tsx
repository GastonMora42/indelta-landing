import Image from "next/image"

export function CompanyLogos() {
  const logos = [
    { name: "Tesla", src: "/placeholder.svg?height=60&width=120" },
    { name: "Amazon", src: "/placeholder.svg?height=60&width=120" },
    { name: "Apple", src: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft", src: "/placeholder.svg?height=60&width=120" },
    { name: "Google", src: "/placeholder.svg?height=60&width=120" },
    { name: "Meta", src: "/placeholder.svg?height=60&width=120" },
    { name: "Nvidia", src: "/placeholder.svg?height=60&width=120" },
    { name: "Berkshire Hathaway", src: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[180px] h-24 flex items-center justify-center"
        >
          <Image
            src={logo.src || "/placeholder.svg"}
            alt={logo.name}
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  )
}
