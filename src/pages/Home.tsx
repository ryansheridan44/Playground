import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Components</h1>
        <div className="list">
          <Link to="/button" className="row">
            <div className="row-icon">B</div>
            <div className="row-body">
              <div className="row-name">Button</div>
              <div className="row-desc">A simple, reusable button.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
        </div>
        <h1 className="page-title group-title">Prototypes</h1>
        <div className="list">
          <Link to="/prototypes/consolidated-navigation-1" className="row">
            <div className="row-icon">1</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 1</div>
              <div className="row-desc">Logo switcher; header without the tertiary CTA.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
          <Link to="/prototypes/consolidated-navigation-2" className="row">
            <div className="row-icon">2</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 2</div>
              <div className="row-desc">Parent strip navigation prototype.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
