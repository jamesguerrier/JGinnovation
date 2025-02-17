"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "JG INNOVATION transformed our online presence. Their expertise and dedication to our project were truly impressive.",
  },
  {
    name: "Mark Thompson",
    company: "Global Solutions Ltd.",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with JG INNOVATION was a game-changer for our business. They delivered a website that exceeded our expectations.",
  },
  {
    name: "Emily Chen",
    company: "StartUp Ventures",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The team at JG INNOVATION is incredibly talented. They brought our vision to life with creativity and technical excellence.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl md:text-5xl">What Our Clients Say</h2>
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FaQuoteLeft className="mx-auto mb-4 h-8 w-8 text-primary" />
              <p className="mb-8 text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center justify-center">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="mr-4 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 text-primary shadow-md transition-all hover:bg-primary hover:text-background"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 text-primary shadow-md transition-all hover:bg-primary hover:text-background"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

