import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";

export default function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-[64px]">
        {/* Adjust the padding-top here to match the height of your Navbar */}
        <HomePage />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
    </>
  );
}
