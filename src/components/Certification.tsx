import type { CertificationProps } from "./types";

function Certification({ certifications }: CertificationProps) {
  return (
    <div className="py-20">
      <h2
        id="Certifications"
        className="scroll-mt-22 text-3xl font-bold text-teal-400 mb-2"
      >
        Certifications
      </h2>
      <p className="mb-8">Here are some of the certifications I have earned.</p>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-slate-700 p-4 rounded-lg bg-slate-900 text-white shadow-md hover:bg-teal-700 transition-colors duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-300">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.date}</p>
            {cert.link && (
              <a
                href={cert.link}
                className="text-teal-400 hover:underline text-sm mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
