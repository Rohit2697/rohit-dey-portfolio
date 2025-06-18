"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  project_name: string
  slug: string
  project_description: string
  tech_stack: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    ai_integration?: string[]
  }
  github_url: string
  liveDemo_url?: string
}

interface SkillsSectionData {
  id: string
  title: string
  content: React.ReactNode
  imageSrc: string
  contentPosition: "left" | "right"
}

function ProjectCarousel({
  projects,
  onProjectChange,
}: {
  projects: Project[]
  onProjectChange?: (index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(newIndex)
    onProjectChange?.(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(newIndex)
    onProjectChange?.(newIndex)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    onProjectChange?.(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  // Call onProjectChange when component mounts
  useEffect(() => {
    onProjectChange?.(0)
  }, [])

  const currentProject = projects[currentIndex]

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="bg-white/5 rounded-lg border border-white/10 hover:border-green-500/30 transition-colors p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-semibold text-green-400">{currentProject.project_name}</h3>
            <div className="flex space-x-2">
              <Link
                href={currentProject.github_url}
                target="_blank"
                className="text-white/60 hover:text-green-400 transition-colors"
              >
                <Github size={24} />
              </Link>
              {currentProject.liveDemo_url && (
                <Link
                  href={currentProject.liveDemo_url}
                  target="_blank"
                  className="text-white/60 hover:text-green-400 transition-colors"
                >
                  <ExternalLink size={24} />
                </Link>
              )}
            </div>
          </div>
          <p className="text-white/80 mb-6 leading-relaxed text-lg">{currentProject.project_description}</p>
          <div className="space-y-3">
            {Object.entries(currentProject.tech_stack).map(([category, techs]) => (
              <div key={category} className="flex flex-wrap gap-2">
                <span className="text-green-400 font-medium text-sm mr-2 min-w-fit">
                  {category.replace(/_/g, " ").toUpperCase()}:
                </span>
                <div className="flex flex-wrap gap-1">
                  {techs?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-500/10 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors border border-white/20"
        >
          ←
        </button>

        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-green-400" : "bg-white/30"
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors border border-white/20"
        >
          →
        </button>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
          <span>💻</span>
          <span className="font-medium">
            Project {currentIndex + 1} of {projects.length}
          </span>
        </div>
      </div>
    </div>
  )
}

function SkillsSection({
  section,
  isVisible,
}: {
  section: SkillsSectionData
  isVisible: boolean
}) {
  return (
    <div
      className="h-screen relative flex items-center bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${section.imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-8 lg:px-16 h-full flex items-center">
        <div className={`flex w-full ${section.contentPosition === "right" ? "justify-end" : "justify-start"}`}>
          <div
            className={`max-w-4xl transform transition-all duration-1000 ease-out ${isVisible
              ? "translate-x-0 opacity-100"
              : section.contentPosition === "right"
                ? "translate-x-20 opacity-0"
                : "-translate-x-20 opacity-0"
              }`}
          >
            <div className="bg-black/85 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/20 max-h-[80vh] overflow-y-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 border-b-4 border-green-500 pb-4 inline-block">
                {section.title}
              </h2>
              <div className="text-white/90 leading-relaxed">{section.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [currentProjectBackground, setCurrentProjectBackground] = useState("/taskmanager.jpeg")
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Skills data
  const skills = {
    front_end: ["html5", "css3", "javascript", "typescript", "bootstrap", "tailwind css", "nextjs", "reactjs", "vuejs"],
    back_end: ["nodejs", "expressjs", "rest api", "graphql"],
    database: ["mysql", "db2", "redis", "mongodb", "elasticsearch", "firebase"],
    cloud: ["ibm", "aws", "gcp"],
    version_control: ["git"],
    software_methodology: ["agile", "waterfall"],
    others: ["jira", "redhat", "problem solving", "open source professional", "fullstack development"],
  }

  const certificates = [
    "IBM Delivery Central Platform Foundations - 2025",
    "AWS Certified Cloud Practitioner - 2025",
    "Banking Industry Jumpstart - 2024",
    "Enterprise Design Thinking Practitioner - 2024",
    "IBM Consulting Way Habits - Foundational - 2024",
    "Full Stack Web Development: HTML, CSS, React and Node",
    "The Complete SQL Bootcamp 2021",
    "Typescript: The Complete Developer's Guide",
    "Next JS: The Complete Developer's Guide",
    "The Complete Node.js Developer Course",
    "React - The Complete Guide 2024",
    "The Complete JavaScript Course 2022",
    "Infosys Certified Mongo Developer",
    "Infosys Certified NodeJs Developer",
    "Infosys Certified React Developer",
    "Infosys Certified Vue Developer",
  ]

  const projects: Project[] = [
    {
      "project_name": "AI-Powered Knowledge Hub",
      "slug": "ai-content-hub",
      "project_description": "A full-stack web application that allows users to generate, edit, summarize, and publish AI-assisted articles using OpenAI's API and Langchain. Built with a responsive UI, state management, and editor-rich UX.",
      "tech_stack": {
        "frontend": [
          "Next.js 14 (App Router)",
          "Tailwind CSS",
          "ShadCN UI",
          "Tiptap Editor",
          "Zustand"
        ],
        "backend": ["Node.js", "Next.js API Routes", "Prisma ORM", "SQLite"],
        "database": ["SQLite"],
        "ai_integration": ["OpenAI API", "Langchain"]
      },
      "github_url": "https://github.com/Rohit2697/ai-content-hub.git",
      "liveDemo_url": "https://ai-content-hub-ruddy.vercel.app"
    },
    {
      project_name: "Task Manager",
      slug: "taskmanager",
      project_description:
        "The Task Manager Dashboard is developed using Vue.js, Express.js, and MongoDB, offering a user-friendly interface for efficient task management. Users can seamlessly create, edit, and delete tasks, set due dates, and track progress.",
      tech_stack: {
        frontend: ["vuejs", "Bootstrap5"],
        backend: ["Express JS"],
        database: ["mongo db"],
      },
      github_url: "https://github.com/Rohit2697/task-manager-api.git",
    },
    {
      project_name: "Weather App",
      slug: "weatherapp",
      project_description:
        "Developed a Weather App that retrieves weather data from the Weather Stack API and creates custom REST APIs for data delivery.",
      tech_stack: {
        frontend: ["HTML5", "CSS", "JavaScript"],
        backend: ["Nodejs", "Express server", "REST APIs"],
      },
      github_url: "https://github.com/Rohit2697/node-weather-project.git",
    },
    {
      project_name: "News Hub",
      slug: "news_hub",
      project_description:
        "A dynamic news platform that leverages the power of the News API and Google's Gemini Flash LLM model to deliver fine-tuned, relevant news to users.",
      tech_stack: {
        frontend: ["Nextjs", "Shadcn UI"],
        backend: ["Express JS", "Google Gemini Flash"],
        database: ["mongo db"],
      },
      github_url: "https://github.com/Rohit2697/news_hub_frontend",
      liveDemo_url: "https://news-hub-frontend-neon.vercel.app/login",
    },
    {
      project_name: "Chat App",
      slug: "chatapp",
      project_description:
        "The Chat App is a modern communication platform developed using cutting-edge technologies. This project offers a seamless and interactive chat experience, bringing users together in real-time conversations.",
      tech_stack: {
        frontend: ["React JS", "redux", "Bootstrap5"],
        backend: ["Express JS", "rest API", "Socket IO server"],
      },
      github_url: "https://github.com/Rohit2697/ChatApp.git",
    },
  ]

  const projectImages = [
    "/projects/ai-content-hub.jpeg",
    "/projects/taskmanager.jpeg",
    "/projects/weatherapp.jpeg",
    "/projects/news_hub.jpeg",
    "/projects/chatapp.jpeg",
  ]

  const handleProjectImageChange = (index: number) => {
    setCurrentProjectBackground(projectImages[index])
  }

  const sections: SkillsSectionData[] = [
    {
      id: "skills-overview",
      title: "TECHNICAL EXPERTISE",
      imageSrc: "/techSkill.jpeg",
      contentPosition: "left",
      content: (
        <div className="space-y-6">
          <p className="text-lg mb-6">
            As a <strong className="text-green-400">Full Stack Developer</strong> with expertise across multiple
            technologies, I bring comprehensive skills in modern web development, cloud platforms, and emerging
            technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-xl font-semibold text-green-400">{category.replace(/_/g, " ").toUpperCase()}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30"
                    >
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
            <p className="text-green-400 font-medium">🚀 On the way to add more skills and technologies!</p>
          </div>
        </div>
      ),
    },
    {
      id: "certificates",
      title: "CERTIFICATIONS & ACHIEVEMENTS",
      imageSrc: "/certificate.jpeg",
      contentPosition: "right",
      content: (
        <div className="space-y-6">
          <p className="text-lg mb-6">
            Continuous learning and professional development through industry-recognized certifications and
            comprehensive courses in <strong className="text-green-400">modern web technologies</strong>.
          </p>
          <div className="grid gap-4">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-green-500/30 transition-colors"
              >
                <span className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-white/90 leading-relaxed">{certificate}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              <span>🏆</span>
              <span className="font-medium">{certificates.length} Certifications Completed</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      title: "FEATURED PROJECTS",
      imageSrc: currentProjectBackground, // Dynamic background based on current project
      contentPosition: "left",
      content: (
        <div className="space-y-6">
          <p className="text-lg mb-6">
            Showcasing innovative projects that demonstrate expertise in{" "}
            <strong className="text-green-400">full-stack development</strong>, AI integration, and modern web
            technologies. Each project represents a unique challenge and solution.
          </p>
          <ProjectCarousel projects={projects} onProjectChange={handleProjectImageChange} />
        </div>
      ),
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev)
              newSet.delete(entry.target.id)
              return newSet
            })
          }
        })
      },
      {
        threshold: 0.4,
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    sections.forEach((section) => {
      const element = sectionRefs.current[section.id]
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-hidden">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          className="section"
        >
          <SkillsSection section={section} isVisible={visibleSections.has(section.id)} />
        </div>
      ))}
    </div>
  )
}
