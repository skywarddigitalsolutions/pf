import type { ReactNode } from "react"

interface BentoGridProps {
  children: ReactNode
}

export function BentoGrid({ children }: BentoGridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">{children}</div>
}

interface BentoItemProps {
  children: ReactNode
  className?: string
  gradient?: "primary" | "secondary" | "dark"
}

export function BentoItem({ children, className = "", gradient = "primary" }: BentoItemProps) {
  const gradientClasses = {
    primary: "from-rojoprincipal to-rojosecundario",
    secondary: "from-rojosecundario to-grisoscuro",
    dark: "from-grisoscuro to-negro",
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]} opacity-20 transition-opacity duration-300 hover:opacity-30`}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

