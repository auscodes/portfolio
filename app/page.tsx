import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold tracking-tight">hi, i'm austin</h1>
      <p className="mt-4 text-lg text-gray-600">
        learning swe
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/auscodes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/limchunyik/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:limchunyik6868@gmail.com"
          aria-label="Email"
        >
          <MdEmail size={24} />
        </a>
      </div>

      <section id="about" className="mt-16">
        <h2 className="text-2xl font-semibold">about</h2>
        <p className="mt-2 text-gray-600">
          final year swe student
        </p>
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold">projects</h2>
        <p className="mt-2 text-gray-600">coming soon</p>
      </section>

      <section id="interests" className="mt-16">
        <h2 className="text-2xl font-semibold">interests</h2>
        <p className="mt-2 text-gray-600">coming soon</p>
      </section>
    </main>
  );
}
