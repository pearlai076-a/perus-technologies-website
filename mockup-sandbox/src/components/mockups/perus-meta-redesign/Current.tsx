import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Menu,
  Shield,
  Sparkles,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import "./_group.css";

const nav = [
  ["About", "#about"],
  ["Products", "#products"],
  ["Innovation", "#innovation"],
  ["Offers", "#offers"],
  ["Downloads", "#resources"],
  ["Announcements", "#resources"],
  ["Contact", "#contact"],
];

const products = [
  {
    id: "1",
    name: "PERUS AI",
    categoryName: "Artificial intelligence",
    summary: "An AI platform and intelligent technology infrastructure.",
    status: "available",
    href: "https://perus.ai",
  },
  {
    id: "2",
    name: "PERUS AI Marketing",
    categoryName: "Digital marketing",
    summary: "A digital marketing system for businesses.",
    status: "in development",
    href: "#contact",
  },
  {
    id: "3",
    name: "ESI",
    categoryName: "Digital character and app",
    summary: "A digital character and mobile application.",
    status: "in development",
    href: "#contact",
  },
  {
    id: "4",
    name: "PERUS STUDIOS",
    categoryName: "Digital entertainment",
    summary: "A streaming platform initiative.",
    status: "in development",
    href: "#contact",
  },
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="PERUS TECHNOLOGIES home">
      <span className="brand-mark">P</span>
      <span>
        PERUS <b className="gold">TECHNOLOGIES</b>
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#090a0d] text-[#f4f3ef]"
      data-testid="page-perus-home"
    >
      <div className="topline" />
      <header className="site-header">
        <div className="wrap flex h-[76px] items-center justify-between gap-5">
          <Brand />
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex"
          >
            {nav.map(([label, url]) => (
              <a key={url + label} href={url} className="navlink">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#products" className="navlink">
              Sign in
            </a>
            <a href="#products" className="button-gold">
              Explore our work <ArrowUpRight size={15} />
            </a>
          </div>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="text-[#e4d7b8] xl:hidden"
            data-testid="button-menu"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#0d0f13] px-6 py-5 xl:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
              {nav.map(([label, url]) => (
                <a
                  key={url + label}
                  href={url}
                  onClick={() => setOpen(false)}
                  className="navlink"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
      {children}
      <footer className="border-t border-white/10 py-9">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <Brand />
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#a5a6ad]">
              {nav.map(([label, url]) => (
                <a key={url + label} href={url} className="hover:text-[#f0d99f]">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-7 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 text-[11px] text-[#777982] sm:flex-row">
            <span>© 2026 PERUS TECHNOLOGIES. All rights reserved.</span>
            <span>Technology. Intelligence. Innovation.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2" data-testid="list-products">
      {products.map((product, index) => (
        <article
          key={product.id}
          className="surface-card group relative min-h-[230px] p-7 transition hover:-translate-y-1 hover:border-[#d6b46b]/50"
          data-testid={`card-product-${product.id}`}
        >
          <span className="text-[10px] font-bold tracking-[.17em] text-[#d6b46b]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {product.categoryName.toUpperCase()}
          </span>
          <h3 className="font-display mt-8 text-2xl font-bold">{product.name}</h3>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[#a5a6ad]">
            {product.summary}
          </p>
          <a
            href={product.href}
            className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#f0d99f]"
          >
            {product.status === "available" ? "Discover more" : "In development"}
            <ArrowRight size={14} />
          </a>
        </article>
      ))}
    </div>
  );
}

export function Current() {
  return (
    <SiteShell>
      <main>
        <section className="hero-bg relative overflow-hidden py-20 md:py-28">
          <div className="hero-grid pointer-events-none absolute inset-0" />
          <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div className="reveal">
              <Eyebrow>Independent technology company</Eyebrow>
              <h1 className="font-display mt-6 text-[clamp(42px,6vw,76px)] font-extrabold leading-[1.04] tracking-[-.055em]">
                Building what’s <span className="gold">next.</span>
                <br />
                For a smarter world.
              </h1>
              <p className="mt-6 max-w-[570px] text-base leading-8 text-[#b9bac0]">
                We create technology, intelligent digital products and connected
                experiences designed to help people and businesses move forward.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#products" className="button-gold">
                  Discover our products <ArrowUpRight size={15} />
                </a>
                <a href="#about" className="button-outline">
                  Who we are
                </a>
              </div>
              <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[.15em] text-[#858790]">
                <span className="h-px w-9 bg-[#d6b46b]" />
                Technology · Intelligence · Innovation
              </div>
            </div>
            <div className="relative mx-auto grid h-[330px] w-full max-w-[450px] place-items-center md:h-[420px]">
              <div className="orbit h-[195px] w-[340px] rotate-[-22deg]" />
              <div className="orbit h-[255px] w-[410px] rotate-[48deg]" />
              <div className="orbit h-[300px] w-[300px]" />
              <span className="absolute right-[17%] top-[12%] h-2 w-2 rounded-full bg-[#f0d99f] shadow-[0_0_18px_#d6b46b]" />
              <span className="absolute bottom-[14%] left-[12%] h-2 w-2 rounded-full bg-[#f0d99f] shadow-[0_0_18px_#d6b46b]" />
              <div className="grid h-36 w-36 place-items-center rounded-full border border-[#f0d99f]/70 bg-[radial-gradient(circle_at_35%_28%,#44403a,#161719_50%,#08090b_75%)] font-display text-xl tracking-[.18em] text-[#f0d99f] shadow-[0_0_80px_rgba(214,180,107,.18)] md:h-44 md:w-44">
                PERUS
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-white/10 bg-[#0d0f13]">
          <div className="wrap grid gap-5 py-6 md:grid-cols-3">
            <Stat
              title="INTELLIGENT SYSTEMS"
              text="Building useful digital intelligence"
            />
            <Stat
              title="CONNECTED EXPERIENCES"
              text="Products designed around people"
            />
            <Stat
              title="CONTINUOUS INNOVATION"
              text="Ideas developed into real solutions"
            />
          </div>
        </div>

        <section id="products" className="py-20 md:py-24">
          <div className="wrap">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <Eyebrow>Our ecosystem</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold tracking-[-.04em] md:text-5xl">
                  Technology with a <span className="gold">purpose.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#a5a6ad]">
                Explore the products and platforms being developed across the
                PERUS TECHNOLOGIES ecosystem.
              </p>
            </div>
            <ProductCards />
            <a
              href="#products"
              className="mt-7 inline-flex items-center gap-2 text-sm text-[#f0d99f]"
            >
              View all products <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-white/10 bg-[#0e1014] py-20"
        >
          <div className="wrap grid items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
            <div className="relative grid min-h-[280px] place-items-center border border-white/10 bg-[radial-gradient(circle,rgba(214,180,107,.13),transparent_55%),#111319]">
              <span className="grid h-40 w-40 place-items-center rounded-full border border-[#d6b46b] font-display text-5xl font-extrabold text-[#f0d99f] shadow-[0_0_60px_rgba(214,180,107,.12)]">
                P.
              </span>
              <small className="absolute bottom-5 text-[9px] tracking-[.22em] text-[#8b8d95]">
                PERUS TECHNOLOGIES
              </small>
            </div>
            <div>
              <Eyebrow>About the company</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold tracking-[-.04em] md:text-5xl">
                Ideas become <span className="gold">possibilities.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#a5a6ad]">
                PERUS TECHNOLOGIES is a technology company focused on developing
                digital products, intelligent systems and platforms. Our work
                brings together software, artificial intelligence and creative
                thinking to explore solutions for a changing world.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#f0d99f]"
              >
                Meet the company <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="innovation" className="py-20">
          <div className="wrap">
            <div className="mb-10">
              <Eyebrow>How we think</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl">
                Driven by <span className="gold">possibility.</span>
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Principle
                icon={Cpu}
                title="Artificial intelligence"
                text="Exploring practical AI capabilities that make digital products more useful and responsive."
              />
              <Principle
                icon={Sparkles}
                title="Software engineering"
                text="Building connected applications and platforms with thoughtful product architecture."
              />
              <Principle
                icon={Shield}
                title="Security by design"
                text="Making security and responsible handling of information important parts of product development."
              />
            </div>
          </div>
        </section>

        <section
          id="offers"
          className="border-y border-[#d6b46b]/20 bg-[linear-gradient(105deg,#17150f,#111318_55%,#17150f)] py-16"
        >
          <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Eyebrow>Current offers</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-bold md:text-4xl">
                A good time to <span className="gold">explore.</span>
              </h2>
              <p className="mt-2 text-sm text-[#a5a6ad]">
                Connect with us about products and opportunities.
              </p>
            </div>
            <a href="#contact" className="button-gold">
              See offers <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Eyebrow>Work with us</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-bold">
                Have an idea worth <span className="gold">building?</span>
              </h2>
            </div>
            <a href="#contact" className="button-outline">
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function Stat({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-white/10 md:border-r md:px-6 first:md:pl-0 last:md:border-0">
      <strong className="font-display block text-xs tracking-widest text-[#f0d99f]">
        {title}
      </strong>
      <span className="text-xs text-[#92949c]">{text}</span>
    </div>
  );
}

function Principle({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Cpu;
  title: string;
  text: string;
}) {
  return (
    <article className="surface-card p-6">
      <span className="grid h-10 w-10 place-items-center border border-[#d6b46b]/40 text-[#f0d99f]">
        <Icon size={18} />
      </span>
      <h3 className="font-display mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#a5a6ad]">{text}</p>
    </article>
  );
}
