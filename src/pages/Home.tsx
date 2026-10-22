import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Playground</p>
        <h1 className="hero-title">Things to click through.</h1>
        <p className="hero-sub">
          Prototypes and small components, built to be tried rather than described.
        </p>

        <div className="tiles">
          <Link to="/navigation" className="tile tile-feature">
            <div className="tile-art" aria-hidden="true">
              <div className="art-bar">
                <span className="art-logo" />
                <span className="art-link" />
                <span className="art-link" />
                <span className="art-link" />
                <span className="art-cta" />
              </div>
              <div className="art-bar art-sub">
                <span className="art-mark" />
                <span className="art-name" />
                <span className="art-div" />
                <span className="art-link" />
                <span className="art-link" />
              </div>
              <div className="art-menu" />
            </div>
            <div className="tile-body">
              <div className="tile-title">Navigation prototypes</div>
              <div className="tile-desc">
                The consolidated Commerce navigation with switchable menu layouts, sub-brand visibility and button styles, plus five earlier rounds.
              </div>
            </div>
            <span className="tile-count">6 prototypes</span>
          </Link>

          <Link to="/button" className="tile">
            <div className="tile-art tile-art-small" aria-hidden="true">
              <span className="art-button" />
            </div>
            <div className="tile-body">
              <div className="tile-title">Components</div>
              <div className="tile-desc">A simple, reusable button.</div>
            </div>
            <span className="tile-count">1 component</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
