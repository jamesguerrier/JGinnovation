"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "With over 15 years of experience in web development, John leads our team with passion and innovation.",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Jane's creative vision brings life to our projects, ensuring each design is both beautiful and functional.",
  },
  {
    name: "Mike Johnson",
    role: "Senior Developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Mike's expertise in cutting-edge technologies keeps our development process ahead of the curve.",
  },
]

const stats = [
  { label: "Projects Delivered", value: 50 },
  { label: "Happy Clients", value: 100 },
  { label: "Team Members", value: 15 },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl md:text-5xl text-white">About Us</h2>
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg bg-muted p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
        <div ref={ref} className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="mb-2 text-4xl font-bold text-primary">
                {inView && <CountUp end={stat.value} duration={2.5} />}+
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

