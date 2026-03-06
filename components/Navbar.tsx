const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Review", href: "#review" },
  { label: "Order", href: "#order" },
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="brand">
          Sweet<span className="accent">Crumb</span>
        </div>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
