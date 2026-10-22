import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Prototypes</h1>
        <div className="list">
          <Link to="/prototypes/sub-brand-navigation" className="row">
            <div className="row-icon">6</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 6</div>
              <div className="row-desc">Sub-brand visibility, navigation styles and button layouts on one prototype.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
          <Link to="/prototypes/consolidated-navigation-5" className="row">
            <div className="row-icon">5</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 5</div>
              <div className="row-desc">Navigation 4 with floating, rounded dropdown menus.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
          <Link to="/prototypes/consolidated-navigation-4" className="row">
            <div className="row-icon">4</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 4</div>
              <div className="row-desc">Two tiers: Commerce header plus sub-brand bar, no parent strip.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
          <Link to="/prototypes/consolidated-navigation-3" className="row">
            <div className="row-icon">3</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 3</div>
              <div className="row-desc">Commerce global header with a sub-brand secondary bar.</div>
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
          <Link to="/prototypes/consolidated-navigation-1" className="row">
            <div className="row-icon">1</div>
            <div className="row-body">
              <div className="row-name">Consolidated Navigation 1</div>
              <div className="row-desc">Logo switcher; header without the tertiary CTA.</div>
            </div>
            <span className="row-action">View ↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
