const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Review", href: "#review" },
  { label: "Order", href: "#order" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1100px,92%)] items-center justify-between py-4">
        <div className="text-2xl font-extrabold tracking-wide text-slate-800">
          Sweet<span className="text-pink-500">Crumb</span>
        </div>
        <nav>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-600"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
