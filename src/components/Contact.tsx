function Contact() {
  const images = import.meta.glob("../assets/*.png", {
    eager: true,
    as: "url",
  });
  return (
    <>
      <section
        id="Contact"
        className="scroll-mt-24 py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a
            question, want to collaborate, or just want to say hi, feel free to
            reach out!
          </p>

          <div className="text-left space-y-4">
            <p className="flex items-center gap-2">
              <img
                src={images["../assets/email.png"]}
                alt="Email icon"
                className="w-6 h-6"
              />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:rizqyibra@gmail.com
                "
                className="text-teal-400 hover:underline"
              >
                rizqyibra@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src={images["../assets/linkedin.png"]}
                alt="LinkedIn icon"
                className="w-6 h-6"
              />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ibra-rizqy-7aa2021a0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                linkedin.com/in/ibra-rizqy-7aa2021a0
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src={images["../assets/github.png"]}
                alt="GitHub icon"
                className="w-6 h-6"
              />
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/IbraRizqy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                github.com/IbraRizqy
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src={images["../assets/instagram.png"]}
                alt="Instagram icon"
                className="w-6 h-6"
              />
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/rizqyibra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                instagram.com/rizqyibra
              </a>
            </p>
          </div>

          {/* Optional: Simple form (no backend handling) */}
          {/* <form className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded shadow"
          >
            Send Message
          </button>
        </form> */}
        </div>
      </section>
    </>
  );
}
export default Contact;
