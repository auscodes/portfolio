export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ea]">
      <main
        id="home"
        className="relative min-h-screen max-w-3xl mx-auto px-6 py-8 text-base"
      >
        <nav className="mb-12 flex justify-between font-mono text-xs tracking-wide">
          <a href="#home" className="font-mono text-xs tracking-wide">
            tin / 001
          </a>

          <div className="flex gap-4">
            <a href="#about" className="text-gray-600 hover:text-black">
              about
            </a>
            <a href="#projects" className="text-gray-600 hover:text-black">
              projects
            </a>
            <a href="#interests" className="text-gray-600 hover:text-black">
              interests
            </a>
          </div>
        </nav>

        <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
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
      </main>
    </div>
  );
}
