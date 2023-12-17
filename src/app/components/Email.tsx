"use client"

import Link from "next/link"
import { motion } from "framer-motion";

const Email = () => {
  return (
    <motion.div 
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
      >
      <Link href="mailto:kazimofficial347@gmail.com" className="email-link">
        kazimofficial347@gmail.com
      </Link>
    </motion.div>
  )
}

export default Email;
