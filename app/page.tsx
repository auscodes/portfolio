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

        <div className="grid flex-1 content-start gap-12 pb-12 pt-14 md:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1.1fr)] md:gap-16">
          <section aria-labelledby="intro-heading" className="max-w-2xl">
            <h1
              id="intro-heading"
              className="text-5xl font-semibold leading-none tracking-tight sm:text-7xl"
            >
              hi, i&apos;m austin.
            </h1>

            <p className="mt-2 font-mono text-sm tracking-wide text-gray-600">
              software engineering @ smu
            </p>

            <div className="mt-4 flex gap-4 font-mono text-xs tracking-wide">
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

          <div
            className="hidden min-h-80 md:block"
            aria-hidden="true"
          />
        </div>
      </main>
    </div>
  );
}
