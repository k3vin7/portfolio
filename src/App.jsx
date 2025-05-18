import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="h-[calc(100vh-64px)] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}


export default App
