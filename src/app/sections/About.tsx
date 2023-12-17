"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
      className="about" id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi, I’m a Kazim Hussian. I have been working as a web developer since 2019.
            I am also working on Web Designing and Video Editing. I have experience 
            working on HTML, CSS, JavaScript & youtube Marketing, Facebook Marketing,
            Facebook Ads, Google Ads, Google Analytics, Google Listening & WhatsApp
            Marketing respectively. I also specialize in the development of Facebook
            & Youtube Marketing Strategies. My expertise is Web Development & Social
            Media Marketing.
          </p>
          <p className="about-grid-info-text">
            My team and I went to help you grow your business. Your trust is our 
            highest standard. I have built various projects alone, including 
            management systems and customized websites. I always work with unlimited 
            revisions so no need to worry about changes during the work because 
            client satisfaction is always my priority.
          </p>
          <p className="about-grid-info-text">
            Trust helps you to Sell everything you do in marketing & Sales to build
            trust and unlock the growth of your business۔
          </p>
          <p className="about-grid-info-text">
            I carefully follow the latest trends and innovations in the field of
            information technology. Thank you for reviewing my resume!
          </p>
          <p className="about-grid-info-text">
            here are a few technologies I've been working with recently
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">python</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
          </ul>
          <p className="about-grid-info-text-git">
            <Link href="https://github.com/kazimhussain01" className="github-link"
            target="blank">
            Check out some of my latest projects.
            </Link>
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/kazim.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
