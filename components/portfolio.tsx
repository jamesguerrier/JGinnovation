"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web App",
    image: "/placeholder.svg?height=300&width=400",
    description: "A fully responsive e-commerce platform with advanced filtering and search capabilities.",
  },
  {
    title: "Financial Dashboard",
    category: "Data Visualization",
    image: "/placeholder.svg?height=300&width=400",
    description: "An interactive dashboard for financial data analysis and reporting.",
  },
  {
    title: "Social Media App",
    category: "Mobile App",
    image: "/placeholder.svg?height=300&width=400",
    description: "A cross-platform social media application with real-time messaging and content sharing.",
  },
  // Add more projects as needed
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="bg-muted py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl md:text-5xl">Our Portfolio</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-xl"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="max-w-2xl rounded-lg bg-background p-6" onClick={(e) => e.stopPropagation()}>
              <h3 className="mb-2 text-2xl font-semibold">{projects[selectedProject].title}</h3>
              <p className="mb-4 text-muted-foreground">{projects[selectedProject].category}</p>
              <Image
                src={projects[selectedProject].image || "/placeholder.svg"}
                alt={projects[selectedProject].title}
                width={600}
                height={400}
                className="mb-4 rounded-lg object-cover"
              />
              <p>{projects[selectedProject].description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

