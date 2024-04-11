'use client'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

import { useTransitionFix } from '../lib/useTransitionFix'

export default function Template({ children }: { children: React.ReactNode }) {
  const transitionCallback = useTransitionFix()
  const shouldReduceMotion = useReducedMotion()
  const pathname = usePathname()

  const getVariants = (page: string) => {
    switch (page) {
      case '/':
        return {
          out: { opacity: 0, y: 40, x: 40, transition: { duration: 0.75 } },
          in: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.9, delay: 0.1 },
          },
        }
      case '/about':
        return {
          out: { opacity: 0, y: -40, x: -40, transition: { duration: 0.75 } },
          in: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.9, delay: 0.1 },
          },
        }
      case '/blog':
        return {
          out: { opacity: 0, y: 40, x: -40, transition: { duration: 0.75 } },
          in: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.9, delay: 0.1 },
          },
        }
      case '/work':
        return {
          out: { opacity: 0, y: -40, x: 40, transition: { duration: 0.75 } },
          in: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.9, delay: 0.1 },
          },
        }
      case '/contact':
        return {
          out: { opacity: 0, scale: 0.8, transition: { duration: 0.75 } },
          in: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.9, delay: 0.1 },
          },
        }
      default:
        return {
          out: { opacity: 0, transition: { duration: 0.75 } },
          in: { opacity: 1, transition: { duration: 0.9, delay: 0.1 } },
        }
    }
  }

  const variants = getVariants(pathname)

  return (
    <motion.div
      {...(!shouldReduceMotion && { variants })}
      animate="in"
      initial="out"
      exit="out">
      {children}
    </motion.div>
  )
}
