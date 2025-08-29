'use client'

import { motion } from 'framer-motion'
import Prism from '@/components/reactbits/Prism'
import MagicBento from '@/components/reactbits/MagicBento'
import ProfileCard from '@/components/reactbits/ProfileCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Mail, ExternalLink, Code, Database, Cloud, Brain } from 'lucide-react'

export default function Portfolio() {
  const skills = [
    { category: "Languages & Frameworks", items: ["Python", "Java", "MERN Stack", "React", "Node.js"] },
    { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux"] },
    { category: "Databases", items: ["SQL", "PostgreSQL", "MongoDB", "Prisma"] },
    { category: "AI/ML", items: ["Generative AI", "Machine Learning", "Data Analysis"] }
  ]

  const experiences = [
    {
      title: "Development Engineer Intern",
      company: "Calsoft Inc",
      period: "Feb 2025 - Present",
      description: "Developed a PoC for AI-assisted storage tiering using real-time file access patterns. Built with Filebeat, FastAPI, multi-LLM support, and Docker for portability. Reduced manual analysis overhead by 70% in simulated environments."
    },
    {
      title: "SQL Summer Intern",
      company: "Celebal Technologies",
      period: "Jun 2024 - Aug 2024",
      description: "Collaborated on SQL database development and optimization tasks. Wrote and tested efficient SQL queries for real-world data analysis use cases. Gained hands-on exposure to data modeling, indexing, and query tuning in production-like environments."
    }
  ]

  const projects = [
    {
      title: "VM AutoScaler",
      description: "PowerShell-based automated VM scaler for VirtualBox with real-time CPU monitoring and threshold-based scaling.",
      technologies: ["PowerShell", "VirtualBox", "SSH", "Linux"],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: "ExplorEase - Travel Platform",
      description: "MERN-based travel platform with hotel search, secure authentication, booking flow, and media uploads. Planned AI chatbot and payment features.",
      technologies: ["MERN", "React", "Node.js", "MongoDB"],
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      title: "AI-Assisted Storage Tiering",
      description: "PoC for intelligent storage management using real-time file access patterns and multiple LLM support.",
      technologies: ["Python", "FastAPI", "Docker", "AI/ML"],
      icon: <Brain className="w-8 h-8 text-purple-400" />
    }
  ]

  const skillsCardData = [
    {
      title: "Languages & Frameworks",
      description: "Python, Java, MERN Stack, React, Node.js",
      label: "Core Skills",
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: "DevOps & Tools",
      description: "Docker, Kubernetes, Git, CI/CD, Linux",
      label: "Infrastructure",
      icon: <Cloud className="w-6 h-6 text-green-400" />
    },
    {
      title: "Databases",
      description: "SQL, PostgreSQL, MongoDB, Prisma",
      label: "Data Management",
      icon: <Database className="w-6 h-6 text-purple-400" />
    },
    {
      title: "AI/ML",
      description: "Generative AI, Machine Learning, Data Analysis",
      label: "Intelligence",
      icon: <Brain className="w-6 h-6 text-pink-400" />
    }
  ]

  const experienceCardData = [
    {
      title: "Development Engineer Intern",
      description: "AI-assisted storage tiering PoC with real-time file access patterns and multi-LLM support.",
      label: "Calsoft Inc",
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: "SQL Summer Intern",
      description: "SQL database development, optimization, and query tuning for real-world data analysis.",
      label: "Celestial Technologies",
      icon: <Database className="w-6 h-6 text-green-400" />
    }
  ]

  const projectCardData = [
    {
      title: "VM AutoScaler",
      description: "PowerShell-based automated VM scaler for VirtualBox with real-time CPU monitoring.",
      label: "Automation",
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: "ExplorEase",
      description: "MERN-based travel platform with hotel search, authentication, and booking flow.",
      label: "Web Development",
      icon: <Code className="w-6 h-6 text-green-400" />
    },
    {
      title: "AI Storage Tiering",
      description: "Intelligent storage management using real-time file access patterns and LLM support.",
      label: "AI/ML",
      icon: <Brain className="w-6 h-6 text-purple-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Full Screen Prism Background */}
      <div className="fixed inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          transparent={true}
        />
        {/* Reduced opacity overlay to make Prism more visible */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">
                  DEEPAYAN DAS
                </h1>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-light text-gray-200">
                  Full Stack Developer & AI Enthusiast
                </h2>
              </div>
              
              <div className="flex gap-4 justify-center mb-8">
                <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 bg-gray-900/80">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-gray-900/80">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                About Me
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <ProfileCard
                  name="Deepayan Das"
                  title="Full Stack Developer & AI Enthusiast"
                  handle="deepayan"
                  status="Available for Work"
                  contactText="Contact Me"
                  avatarUrl="/Deepayan_Photograph.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log('Contact clicked')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-600 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      Education & Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Bachelor of Technology in Information Technology</h3>
                      <p className="text-gray-200">Maulana Abul Kalam Azad University of Technology | CGPA: 8.68</p>
                      <p className="text-gray-300 text-sm">Sep 2021 - Jul 2025</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Summary</h3>
                      <p className="text-gray-200 leading-relaxed">
                        Motivated and curious engineering graduate with hands-on experience in scripting, virtualization, 
                        and full-stack development. Comfortable working across system-level tools and modern web stacks. 
                        Focused on building practical solutions and continuously learning through real-world projects.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-purple-900/80 text-purple-200 border-purple-600">
                          Oracle AI Vector Search Certified Professional
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-900/80 text-blue-200 border-blue-600">
                          AI for Everyone (Coursera)
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Technical Skills
              </h2>
            </motion.div>
            
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
              customData={[
                {
                  color: "#060010",
                  title: "Languages & Frameworks",
                  description: "Python, Java, MERN Stack, React, Node.js",
                  label: "Development"
                },
                {
                  color: "#060010",
                  title: "DevOps & Tools",
                  description: "Docker, Kubernetes, Git, CI/CD, Linux",
                  label: "Infrastructure"
                },
                {
                  color: "#060010",
                  title: "Databases",
                  description: "SQL, PostgreSQL, MongoDB, Prisma",
                  label: "Data Management"
                },
                {
                  color: "#060010",
                  title: "AI/ML",
                  description: "Generative AI, Machine Learning, Data Analysis",
                  label: "Intelligence"
                }
              ]}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Experience
              </h2>
            </motion.div>
            
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
              customData={[
                {
                  color: "#060010",
                  title: "Development Engineer Intern",
                  description: "Calsoft Inc - AI-assisted storage tiering PoC with real-time file access patterns",
                  label: "Current"
                },
                {
                  color: "#060010",
                  title: "SQL Summer Intern",
                  description: "Celebal Technologies - SQL database development and optimization tasks",
                  label: "Previous"
                }
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Projects
              </h2>
            </motion.div>
            
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
              customData={[
                {
                  color: "#060010",
                  title: "VM AutoScaler",
                  description: "PowerShell-based automated VM scaler for VirtualBox with real-time CPU monitoring",
                  label: "Automation"
                },
                {
                  color: "#060010",
                  title: "ExplorEase - Travel Platform",
                  description: "MERN-based travel platform with hotel search, authentication, and booking flow",
                  label: "Full Stack"
                },
                {
                  color: "#060010",
                  title: "AI-Assisted Storage Tiering",
                  description: "PoC for intelligent storage management using real-time file access patterns",
                  label: "AI/ML"
                }
              ]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Let's Connect
              </h2>
              
              <p className="text-xl text-gray-200 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 bg-gray-900/80">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Button>
                <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-gray-900/80">
                  <Mail className="mr-2 h-4 w-4" />
                  deepayan42@gmail.com
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}