function Hero() {
  const images = import.meta.glob("../assets/*.jpg", {
    eager: true,
    as: "url",
  });
  return (
    <>
      <div className="container flex flex-row justify-between h-screen">
        <div className="w-1/2 flex flex-col">
          <section className="min-h-screen flex flex-col justify-center text-start pe-4 bg-gradient-to-b">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Hi! I'm <span className="text-teal-400">Ibra Rizqy</span>
            </h1>
            <p className="text-md sm:text-xl text-gray-200 mb-2">
              An undergraduate student from Universitas Sumatera Utara
            </p>
            <p className="text-md sm:text-lg text-gray-400 max-w-xl mb-4 hidden sm:flex">
              Explore my projects and skills from web development, mobile
              development, to data science.
            </p>

            <div className="flex flex-wrap gap-2 ">
              <img src="https://img.shields.io/badge/-JavaScript-333?style=flat&logo=javascript" />
              <img src="https://img.shields.io/badge/-Python-333?style=flat&logo=python" />
              <img src="https://img.shields.io/badge/-C++-333?style=flat&logo=c%2B%2B" />
              <img src="https://img.shields.io/badge/-HTML5-333?style=flat&logo=html5" />
              <img src="https://img.shields.io/badge/-CSS3-333?style=flat&logo=css3" />
              <img src="https://img.shields.io/badge/-VS%20Code-333?style=flat&logo=visual-studio-code" />
              <img src="https://img.shields.io/badge/-React-333?style=flat&logo=react" />
              <img src="https://img.shields.io/badge/-Laravel-333?style=flat&logo=laravel" />
              <img src="https://img.shields.io/badge/-PHP-333?style=flat&logo=php" />
              <img src="https://img.shields.io/badge/-Tailwind_CSS-333?style=flat&logo=tailwind-css" />
              <img src="https://img.shields.io/badge/-Bootstrap-333?style=flat&logo=bootstrap" />
              <img src="https://img.shields.io/badge/-Roboflow-333?style=flat&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iNiIgc3R5bGU9ImZpbGw6IzgwOGZmZiIvPjxwYXRoIGQ9Ik0yMyAxMC41aC0xLjN2Mi4zYzAtLjMuMi41LjUuNWgxLjNjLjMgMCAuNS0uMi41LS41di0yLjNjMC0uMy0uMi0uNS0uNS0uNXptLTIuNSAxLjRjLS4xLjEtLjIuMi0uMi4zdjEuN2MwIC4xLjEuMi4yLjJoMS43Yy4xIDAgLjItLjEuMi0uMnYtMS43YzAtLjEtLjEtLjItLjItLjJoLTEuN3ptMS41IDEuM2MtLjEuMS0uMi4yLS4yLjN2MS43YzAgLjEuMS4yLjIuMmgxLjdjLjEgMCAuMi0uMS4yLS4ydi0xLjdjMC0uMS0uMS0uMi0uMi0uMmgtMS43eiIvPjwvc3ZnPg==" />
            </div>
          </section>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          <img
            src={images[`../assets/IbraRizqy.jpg`]}
            alt="My Picture!"
            className="rounded-2xl shadow-xl border-4 border-teal-700 object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
