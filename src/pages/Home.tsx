import { Link } from 'react-router-dom'

const PROJECTS = [
  { name: 'Consolidated Navigation 6', to: '/prototypes/sub-brand-navigation' },
  { name: 'Consolidated Navigation 5', to: '/prototypes/consolidated-navigation-5' },
  { name: 'Consolidated Navigation 4', to: '/prototypes/consolidated-navigation-4' },
  { name: 'Consolidated Navigation 3', to: '/prototypes/consolidated-navigation-3' },
  { name: 'Consolidated Navigation 2', to: '/prototypes/consolidated-navigation-2' },
  { name: 'Consolidated Navigation 1', to: '/prototypes/consolidated-navigation-1' },
]

function Home() {
  return (
    <section className="section">
      <div className="container container-narrow">
        <nav className="menu" aria-label="Projects">
          {PROJECTS.map((p) => (
            <Link key={p.to} to={p.to} className="menu-link">
              <span>{p.name}</span>
              <span className="menu-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default Home
