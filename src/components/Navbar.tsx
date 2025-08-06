function Navbar() {
  const items = [
    { name: "Experience" },
    { name: "Certifications" },
    { name: "Projects" },
    { name: "Contact" },
  ];

  return (
    <>
      <nav className="navbar flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-4 md:gap-18 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gray-900 shadow-md fixed top-0 w-full z-50">
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-4 in-hover:cursor-pointer "
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z" />
          </svg>
          <h1 className="text-2xl font-bold text-white">Ibra Rizqy</h1>
        </div>

        <ul className="flex space-x-6 text-lg">
          {items.map((item) => {
            return (
              <li key={item.name} className="text-gray-300">
                <a
                  href={`#${item.name}`}
                  className="hover:text-white hover:underline"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
