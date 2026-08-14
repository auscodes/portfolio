import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main id="home" className="min-h-screen max-w-2xl mx-auto px-6 py-8 text-sm">
      <nav className="mb-12 flex justify-between text-xs">
        <a href="#home" className="font-medium">
          tin
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

      <h1 className="text-3xl font-semibold tracking-tight">hi, i'm austin.</h1>
      <p className="mt-2 text-sm text-gray-600">
        final year software engineering student
      </p>

      <div className="mt-4 flex gap-3">
        <a
          href="https://github.com/auscodes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-600 transition hover:text-black"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/limchunyik/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-600 transition hover:text-black"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="mailto:limchunyik6868@gmail.com"
          aria-label="Email"
          className="text-gray-600 transition hover:text-black"
        >
          <MdEmail size={18} />
        </a>
      </div>

      <section id="about" className="mt-10">
        <h2 className="text-base font-semibold">about</h2>
        <p className="mt-1 text-sm text-gray-600">final year swe student</p>
      </section>

      <section id="projects" className="mt-10">
        <h2 className="text-base font-semibold">projects</h2>
        <p className="mt-1 text-sm text-gray-600">coming soon</p>
      </section>

      <section id="interests" className="mt-10">
        <h2 className="text-base font-semibold">interests</h2>
        <p className="mt-1 text-sm text-gray-600">coming soon</p>
      </section>
    </main>
  );
}