import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "XTABLES",
    description:
      "XTABLES is a comprehensive server and client solution for data management and interaction, featuring mDNS integration and customizable logging.",
    image: "/XTABLES.png",
    github: "https://github.com/Kobeeeef/XTABLES",
    link: "https://github.com/Kobeeeef/XTABLES",
  },
  {
    name: "XDASH",
    description: "XDASH is designed for XBOT Robotics to control all machines that host the cameras, AI models, and XTABLES.",
    image: "/XDASH.png",
    github: "https://github.com/Kobeeeef/XDASH",
    link: "https://github.com/Kobeeeef/XDASH",
  },
  {
    name: "Minions",
    description: "A fully made minecraft minions plugin with over 10 types that integrates seamlessly with other plugins.",
    image: "/MINIONS.png",
    github: "https://github.com/Kobeeeef/Minions",
    link: "https://github.com/Kobeeeef/Minions",
  },
  {
    name: "XCASTER",
    description: "A simple tool to broadcast any hostname of a machine over the local network using mDNS.",
    image: "/XCASTER.png",
    github: "https://github.com/Kobeeeef/XCASTER",
    link: "https://github.com/Kobeeeef/XCASTER",
  },
  {
    name: "Moody",
    description:
      "Discover Moody, your all-in-one verified solution for supercharging your Discord server. Empower your community with a range of powerful features. (Deprecated)",
    image: "/MOODY.png",
    github: "https://github.com/Kobeeeef/Moody",
    link: "https://dashboard-v4.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={300}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
