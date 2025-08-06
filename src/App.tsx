import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Ee from "./components/Ee";
import Certification from "./components/Certification";

import { certifications } from "./components/certificateData";
import { projectData } from "./components/projectData";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 from-slate-800 to-slate-800 bg-gradient-to-b text-white">
        <Hero />
        <Ee />
        <Certification certifications={certifications} />
        <Project projects={projectData} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
