"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimationControls } from "framer-motion"
import { LightbulbIcon, RocketIcon, UsersIcon, BarChartIcon, SearchIcon, CodeIcon } from "lucide-react"
import { useEffect } from "react"

export default function AutoScrollingServices() {
  const controls = useAnimationControls()

  const services = [
    {
      title: "AI Product Strategy",
      description: "From scoping to feasibility — craft smarter, sharper products.",
      icon: LightbulbIcon,
    },
    {
      title: "Go-to-Market Acceleration",
      description: "Nail your narrative, test pilots, and drive traction.",
      icon: RocketIcon,
    },
    {
      title: "Fractional Product Leadership",
      description: "Interim product exec to drive clarity, velocity, and delivery.",
      icon: UsersIcon,
    },
    {
      title: "Investor Advisory",
      description: "Evaluate risk, roadmap, and AI readiness.",
      icon: BarChartIcon,
    },
    {
      title: "AI Readiness & Discovery Sprints",
      description: "Pinpoint high-impact AI use cases and build a pragmatic adoption roadmap.",
      icon: SearchIcon,
    },
    {
      title: "Custom GPTs & Internal Enablement",
      description: "Deploy ChatGPT as a real tool, not just a toy. Train superusers and streamline workflows.",
      icon: CodeIcon,
    },
  ]

  // Duplicate the services array to create a seamless loop
  const duplicatedServices = [...services, ...services]

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={controls}
        initial={{ x: 0 }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          controls.start({
            x: "-50%",
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          })
        }}
      >
        {duplicatedServices.map((service, index) => (
          <Card
            key={`${service.title}-${index}`}
            className="min-w-[300px] max-w-[320px] shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
          >
            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-[#3B6F9C]/10 rounded-full">
                <service.icon className="h-8 w-8 text-[#3B6F9C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}
