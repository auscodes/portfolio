const homeItems = [
  {
    number: "01",
    label: "about",
    href: "/about",
    preview: "little more about me",
    position: "lg:left-[53%] lg:top-[2%]",
    path: "M 45 49 L 50 15",
  },
  {
    number: "02",
    label: "projects",
    href: "/projects",
    preview: "what i've built",
    position: "lg:left-[5%] lg:top-[40%]",
    path: "M 45 49 L 32 46",
  },
  {
    number: "03",
    label: "interests",
    href: "/interests",
    preview: "fun stuff!",
    position: "lg:left-[50%] lg:top-[76%]",
    path: "M 45 49 L 47 80",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ea]">
      <main
        id="home"
        className="mx-auto flex min-h-dvh max-w-6xl flex-col px-6 py-8 text-base sm:px-8 lg:px-12"
      >
        <nav className="flex justify-between font-mono text-xs tracking-wide">
          <a href="#home" className="font-mono text-xs tracking-wide">
            tin / 001
          </a>
        </nav>

        <div className="grid flex-1 content-start gap-12 pb-12 pt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1.1fr)] lg:gap-16">
          <section aria-labelledby="intro-heading" className="max-w-2xl">
            <h1
              id="intro-heading"
              className="text-[clamp(2rem,10vw,3.75rem)] font-semibold leading-none tracking-tight xl:text-7xl"
            >
              hi, i&apos;m austin.
            </h1>

            <p className="mt-2 font-mono text-sm tracking-wide text-gray-600">
              software engineering @ smu
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs tracking-wide">
              <a
                href="https://github.com/auscodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition hover:text-black"
              >
                github ↗
              </a>

              <a
                href="https://www.linkedin.com/in/limchunyik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition hover:text-black"
              >
                linkedin ↗
              </a>

              <a
                href="mailto:limchunyik6868@gmail.com"
                className="text-gray-600 transition hover:text-black"
              >
                email ↗
              </a>
            </div>
            <p className="mt-8 flex items-center font-mono text-sm text-gray-600">
              <span
                className="mr-2 h-1.5 w-1.5 rounded-full bg-[#3157ff]"
                aria-hidden="true"
              />
              currently: building this website
            </p>
          </section>

          <nav
            aria-label="explore"
            className="explore-map relative lg:min-h-80"
          >
            <svg
              className="absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {homeItems.map((item) => (
                <path
                  key={item.number}
                  data-path={item.number}
                  d={item.path}
                  className="map-path"
                  fill="none"
                  stroke="#d8d4cb"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {homeItems.map((item) => (
                <path
                  key={`active-${item.number}`}
                  data-route={item.number}
                  d={item.path}
                  className="map-route"
                  fill="none"
                  pathLength={1}
                  stroke="#3157ff"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            <span
              className="map-traveller absolute left-[45%] top-[49%] z-10 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3157ff] lg:block"
              aria-hidden="true"
            />

            <ul className="relative grid gap-5 lg:min-h-80 lg:block">
              {homeItems.map((item) => (
                <li
                  key={item.number}
                  data-node={item.number}
                  className={`map-node group grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 lg:absolute lg:w-56 ${item.position}`}
                >
                  <span className="pt-1 font-mono text-xs text-gray-500 transition-colors group-hover:text-[#3157ff] group-focus-within:text-[#3157ff]">
                    {item.number}
                  </span>

                  <div>
                    <a
                      href={item.href}
                      aria-describedby={`home-preview-${item.number}`}
                      className="rounded-sm font-mono text-base font-normal tracking-normal text-black outline-none transition-colors hover:text-[#3157ff] focus-visible:text-[#3157ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3157ff]"
                    >
                      {item.label}
                    </a>
                    <p
                      id={`home-preview-${item.number}`}
                      className="node-preview mt-2 flex max-w-xs items-baseline gap-2 font-mono text-[0.6875rem] leading-relaxed tracking-wide text-gray-500"
                    >
                      <span className="text-[#3157ff]" aria-hidden="true">
                        ↳
                      </span>
                      {item.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <footer className="flex flex-wrap justify-between gap-2 pt-8 font-mono text-[0.6875rem] tracking-wide text-gray-500">
          <span>© {new Date().getFullYear()} austin</span>
          <span>end / 001</span>
        </footer>
      </main>
    </div>
  );
}
