"use client"

import { motion } from "framer-motion"
import { FaCode, FaPaintBrush, FaSearch } from "react-icons/fa"

const services = [
  {
    title: "Custom Development",
    description: "Tailored web solutions to meet your unique business needs.",
    icon: FaCode,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user experiences.",
    icon: FaPaintBrush,
  },
  {
    title: "SEO Optimization",
    description: "Boosting your online presence and search engine rankings.",
    icon: FaSearch,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg border border-border p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
                <service.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

