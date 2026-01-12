import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased selection:bg-stone-700 selection:text-stone-100">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-stone-950">
          {/* Grid Pattern */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* Radial Gradient */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>

          <Expertise />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-stone-800 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Musa Waris. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
