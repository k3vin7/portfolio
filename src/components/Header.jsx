export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <nav className="flex justify-between items-center max-w-5xl mx-auto p-4">
        <h1 className="text-xl font-bold">Minjae's Portfolio</h1>
        <ul className="flex gap-4 text-sm font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
