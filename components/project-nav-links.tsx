export const PROJECT_LINKS = [
  { href: "#cosmos-pay", label: "Cosmos Pay" },
  { href: "#ba-protege-plus", label: "BA Protege Plus" },
  { href: "#medflow", label: "MedFlow" },
  { href: "#runa", label: "Runa" },
  { href: "#agentic-city", label: "Agentic City" },
  { href: "#argentina-dev", label: "Argentina.dev" },
] as const

export function ProjectNavLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Projects" className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {PROJECT_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-semibold px-3 py-2 rounded-full border-2 border-black bg-white hover:bg-[#FFC224] transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
