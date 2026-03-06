const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Review", href: "#review" },
  { label: "Order", href: "#order" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-pink-100/40 via-white to-cyan-100/50 pt-12 pb-8 text-slate-700"
    >
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-3xl font-extrabold tracking-wide text-slate-800">
              Sweet<span className="text-pink-400">Crumb</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Premium cake studio untuk kebutuhan personal dan corporate. Kami fokus pada kualitas rasa,
              ketepatan pengiriman, dan desain cake yang elegan.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a className="text-slate-600 transition hover:text-cyan-700" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Jl. Pastry No. 18, Jakarta</li>
              <li>+62 851-8780-2017</li>
              <li>order@sweetcrumb.id</li>
              <li>Setiap hari, 08.00 - 21.00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} Ahmad Hawari. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
