const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-background/90 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-brand-dark dark:text-brand">
          🐾 Amigo Fiel
        </a>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
