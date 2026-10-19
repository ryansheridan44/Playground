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
      </div>
    </section>
  )
}

export default Home
