'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Suspense } from 'react'
import InstallStrip from './InstallStrip'
import BorderGlow from './BorderGlow'
import GitHubStarBadge from './GitHubStarBadge'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  const { scrollY } = useScroll()
  const rotateX = useTransform(scrollY, [0, 800], [0, 12])
  const scale = useTransform(scrollY, [0, 800], [1, 0.92])
  const opacity = useTransform(scrollY, [0, 800], [1, 0.5])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 md:pt-20 pb-24 px-6 overflow-hidden">
      {/* Layered radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(166, 166, 237, 0.07) 0%, transparent 55%)',
            'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(124,58,237,0.04) 0%, transparent 60%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        {/* Product Hunt badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="mb-5"
        >
          <a
            href="https://www.producthunt.com/products/codetwin?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-codetwin"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-border-default bg-surface/70 px-4 py-2.5 backdrop-blur-sm shadow-[0_10px_30px_rgba(10,10,10,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#a6a6ed66] hover:shadow-[0_16px_40px_rgba(166,166,237,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6a6ed] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#a6a6ed1f] via-transparent to-[#2dd4bf1a] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 bg-[#a6a6ed1a] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <img
              alt="CodeTwin on Product Hunt"
              width={230}
              height={50}
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1138895&theme=light&t=1777963463144"
              className="relative z-10 h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <span className="inline-flex items-center gap-2 text-xs text-text-muted uppercase tracking-[0.18em] font-mono mb-8 border border-border-default rounded-full px-4 py-1.5 bg-surface/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a6a6ed] animate-pulse" />
            Terminal-First AI Coding Agent
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="font-sans font-semibold leading-[1.08] tracking-[-0.035em] mb-6">
          {/* Line 1 */}
          <motion.span
            className="block text-hero text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: easeOut }}
          >
            Your Coding Agent.
          </motion.span>
          {/* Line 2 — teal accent on last two words */}
          <motion.span
            className="block text-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6, ease: easeOut }}
          >
            <span className="text-text-primary">Your Machine. </span>
            <span className="text-[#a6a6ed]">
              Your Rules.
            </span>
          </motion.span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          className="text-text-secondary max-w-[820px] mx-auto leading-relaxed mb-10"
          style={{ fontSize: '1.0625rem' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5, ease: easeOut }}
        >
          <span className="hidden lg:block">
            CodeTwin is a terminal-first AI coding agent that runs entirely on your machine.
            <br />
            BYOK. Zero telemetry. Five autonomy levels. You decide how autonomous it gets.
          </span>
          <span className="lg:hidden">
            CodeTwin is a terminal-first AI coding agent that runs entirely on your machine. BYOK. Zero telemetry. Five autonomy levels. You decide how autonomous it gets.
          </span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45, ease: easeOut }}
        >
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 h-12 rounded-lg border border-[#a6a6ed] text-[#a6a6ed] text-sm font-medium hover:bg-[#a6a6ed14] transition-all duration-200 shadow-[0_0_20px_rgba(166,166,237,0.08)]"
          >
            Get Started →
          </Link>

          <Suspense
            fallback={
              <div className="h-[38px] w-36 rounded-lg bg-surface-elevated border border-border-default animate-pulse" />
            }
          >
            <GitHubStarBadge />
          </Suspense>
        </motion.div>

        {/* Install strip */}
        <motion.div
          className="flex justify-center w-full mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.45, ease: easeOut }}
        >
          <InstallStrip />
        </motion.div>

        {/* Hero screenshot placeholder */}
        <motion.div
          className="w-[min(95vw,1040px)] max-w-none"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.7, ease: easeOut }}
        >
          <motion.div style={{ rotateX, scale, opacity, transformPerspective: 1200 }}>
            <BorderGlow
              edgeSensitivity={40}
              glowColor="240 60 70"
              backgroundColor="#0a0a0a"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={true}
              colors={['#a6a6ed', '#ffffff', '#2dd4bf']}
              className="w-full aspect-[16/9]"
            >
              <div className="absolute inset-[2px] overflow-hidden rounded-[14px]">
                <video
                  src="/HeroVideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </BorderGlow>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        aria-hidden="true"
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}
