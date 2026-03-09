'use client';
import Button from "@/src/common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles, Target, Eye } from "lucide-react";
import { useState } from "react";

export default function AboutHeroAI() {

const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" }
  ];

  const content = {
    about: {
      text: "I am a passionate web developer focused on creating modern, fast and user-friendly websites. I enjoy working with new technologies and building creative digital experiences.",
      info: [
        { label: "Name", value: "Jyoti Sathwara" },
        { label: "Location", value: "India" },
        { label: "Experience", value: "2+ Years" },
        { label: "Freelance", value: "Available" }
      ]
    },

    education: {
      timeline: [
        {
          year: "2022",
          degree: "Bachelor Degree",
          institute: "XYZ University",
          desc: "Studied computer science and software development."
        },
        {
          year: "2021",
          degree: "Web Development Course",
          institute: "Online Academy",
          desc: "Completed full stack web development training."
        }
      ]
    },

    experience: {
      timeline: [
        {
          year: "2024 - Present",
          role: "Frontend Developer",
          company: "Freelance",
          desc: "Building responsive websites using React, NextJS and Tailwind."
        },
        {
          year: "2023",
          role: "Web Developer",
          company: "Tech Studio",
          desc: "Worked on UI development and responsive web design."
        }
      ]
    },

    skills: {
      skills: [
        { name: "HTML", value: "95%" },
        { name: "CSS / Tailwind", value: "90%" },
        { name: "JavaScript", value: "85%" },
        { name: "React / NextJS", value: "80%" }
      ]
    }
  };


  return (
    <>
    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-7">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-accent px-4 py-1 text-sm text-primary backdrop-blur"
            >
              <Sparkles size={14}/> AI Powered Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              className="text-4xl font-bold leading-tight md:text-6xl"
            >
              Building the
              <span className="block bg-accent bg-clip-text text-transparent">
                Future of Web
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="max-w-xl text-gray-400"
            >
              I design and build intelligent digital products using modern
              technologies, AI powered workflows, and futuristic user
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .9 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                variant="filled"
              >
                Explore My Work
              </Button>

              <Button 
                variant="outline"
              >
                Download CV
              </Button>
            </motion.div>
          </div>


          {/* RIGHT FUTURISTIC CARD */}
          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <img
                src="/home/ab4.jpg"
                alt="developer"
                className="rounded-2xl object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-primary text-sm ring-1 ring-white/10">
                <Cpu size={16}/> AI Developer
              </div>

              <div className="absolute -top-5 -right-5 rounded-xl bg-accent px-4 py-2 text-sm text-primary font-medium shadow-lg">
                Future Tech
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>

    {/* MISSION & VISION SECTION */}
    <section className="relative overflow-hidden bg-primary text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="inline-block rounded-full border border-white/10 bg-accent px-4 py-1 text-sm text-primary backdrop-blur">
            My Purpose
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Mission & Vision
          </h2>

          <p className="mt-4 text-gray-400">
            Creating meaningful digital experiences with innovation,
            creativity, and modern technology.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-secondary/30 p-8 backdrop-blur-xl ring-1 ring-white/10 transition hover:ring-accent"
          >

            <div className="relative">

              <div className="mb-6 inline-flex rounded-xl bg-primary/30 p-3">
                <Target className="text-accent" size={28}/>
              </div>

              <h3 className="text-2xl text-accent font-semibold">My Mission</h3>

              <p className="mt-4 text-gray-800 leading-relaxed">
                My mission is to design and develop modern websites that
                combine creativity, performance, and user experience. I aim to
                help businesses build strong digital identities through clean
                UI, smooth animations, and scalable web solutions.
              </p>

            </div>
          </motion.div>


          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl bg-secondary/30 p-8 backdrop-blur-xl ring-1 ring-white/10 transition hover:ring-accent"
          >
            <div className="relative">

              <div className="mb-6 inline-flex rounded-xl bg-primary/30 p-3">
                <Eye className="text-accent" size={28}/>
              </div>

              <h3 className="text-2xl text-accent font-semibold">My Vision</h3>

              <p className="mt-4 text-gray-800 leading-relaxed">
                My vision is to become a creative developer who builds
                innovative and futuristic web experiences. I strive to push the
                boundaries of design and technology to create websites that are
                visually stunning, highly interactive, and impactful.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* ABOUT TABS SECTION */}
    <section id="about-tabs" className="bg-primary text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">

          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition
              ${activeTab === tab.id
                  ? "bg-accent text-primary"
                  : "bg-white/5 hover:bg-white/10"
                }`}
            >
              {tab.label}
            </button>
          ))}

        </div>


        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="flex justify-center"
          >

            <img
              src="/home/ab1.png"
              alt="developer"
              className="max-w-sm w-full"
            />

          </motion.div>


          {/* Tab Content */}
          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: .4 }}
            >

              {activeTab === "about" && (

                <div className="space-y-6">

                  <p className="text-gray-400 leading-relaxed">
                    {content.about.text}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">

                    {content.about.info.map((item, i) => (

                      <div
                        key={i}
                        className="bg-white/5 p-4 rounded-lg border border-white/10"
                      >
                        <p className="text-gray-500 text-sm">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>

                    ))}

                  </div>

                </div>

              )}


              {activeTab === "education" && (

                <div className="space-y-8">

                  {content.education.timeline.map((item, i) => (

                    <div
                      key={i}
                      className="relative pl-8 border-l border-white/20"
                    >

                      <span className="absolute left-[-6px] top-1 w-3 h-3 bg-accent rounded-full"></span>

                      <p className="text-accent text-sm">{item.year}</p>
                      <h4 className="text-xl font-semibold">{item.degree}</h4>
                      <p className="text-gray-400">{item.institute}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>

                    </div>

                  ))}

                </div>

              )}


              {activeTab === "experience" && (

                <div className="space-y-8">

                  {content.experience.timeline.map((item, i) => (

                    <div
                      key={i}
                      className="relative pl-8 border-l border-white/20"
                    >

                      <span className="absolute left-[-6px] top-1 w-3 h-3 bg-accent rounded-full"></span>

                      <p className="text-accent text-sm">{item.year}</p>
                      <h4 className="text-xl font-semibold">{item.role}</h4>
                      <p className="text-gray-400">{item.company}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>

                    </div>

                  ))}

                </div>

              )}


              {activeTab === "skills" && (

                <div className="space-y-6">

                  {content.skills.skills.map((skill, i) => (

                    <div key={i}>

                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.value}</span>
                      </div>

                      <div className="w-full bg-white/10 h-2 rounded-full">

                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: skill.value }}
                        ></div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </motion.div>

          </AnimatePresence>

        </div>


        {/* Mobile Layout (Show All Content) */}

        <div className="md:hidden space-y-16">

          {/* Image */}
          <div className="flex justify-center">

            <img
              src="/home/ab1.png"
              alt="developer"
              className="max-w-xs w-full"
            />

          </div>


          {/* About */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">About</h3>

            <p className="text-gray-400 leading-relaxed">
              {content.about.text}
            </p>

          </div>


          {/* Education */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">Education</h3>

            {content.education.timeline.map((item, i) => (

              <div
                key={i}
                className="relative pl-8 border-l border-white/20 mb-6"
              >

                <span className="absolute left-[-6px] top-1 w-3 h-3 bg-accent rounded-full"></span>

                <p className="text-accent text-sm">{item.year}</p>
                <h4 className="text-lg font-semibold">{item.degree}</h4>
                <p className="text-gray-400">{item.institute}</p>

              </div>

            ))}

          </div>


          {/* Skills */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">Skills</h3>

            {content.skills.skills.map((skill, i) => (

              <div key={i} className="mb-4">

                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.value}</span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full">

                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: skill.value }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

    {/* CALL TO ACTION SECTION */}
    <section className="relative overflow-hidden bg-primary py-12">

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative text-center rounded-3xl border border-accent bg-white/5 backdrop-blur-xl p-12 md:p-16"
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl text-secondary font-bold leading-tight">
            Let's Build Something  
            <span className="text-accent"> Amazing Together</span>
          </h2>


          {/* DESCRIPTION */}
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            I create modern websites, AI powered platforms and digital
            experiences. If you have an idea, let's turn it into reality.
          </p>


          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button
             variant="filled">
              Contact Me
            </Button>

            <Button variant="outline">
              View Portfolio
            </Button> 

          </div>
        </motion.div>

      </div>

    </section>


  </>
  );
}