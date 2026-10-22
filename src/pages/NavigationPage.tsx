import { Link } from 'react-router-dom'
import { VARIANTS, pad } from '../components/SubBrandNavigation/variants'

const EARLIER = [
  { n: 1, desc: 'Logo switcher; header without the tertiary CTA.' },
  { n: 2, desc: 'Parent strip navigation prototype.' },
  { n: 3, desc: 'Commerce global header with a sub-brand secondary bar.' },
  { n: 4, desc: 'Two tiers: Commerce header plus sub-brand bar, no parent strip.' },
  { n: 5, desc: 'Navigation 4 with floating, rounded dropdown menus.' },
]

function NavigationPage() {
  return (
    <section className="section">
      <div className="container">
        <Link to="/" className="back">← Playground</Link>
        <p className="eyebrow">Navigation prototypes</p>
        <h1 className="hero-title">Sub-brand navigation</h1>
        <p className="hero-sub">
          Visitors on BigCommerce should know where they are, while Commerce stays the parent brand. Ten ways
          to show the sub-brand, all on the floating-menu navigation. Menu content and organization are
          identical, so only the sub-brand treatment changes.
        </p>
        <div className="actions">
          <Link to="/prototypes/sub-brand-navigation/compare" className="action action-primary">
            Compare all 10
          </Link>
          <Link to="/prototypes/sub-brand-navigation/1" className="action">
            Open the prototype
          </Link>
        </div>

        <div className="list">
          {VARIANTS.map((v) => (
            <Link key={v.id} to={`/prototypes/sub-brand-navigation/${v.id}`} className="row">
              <div className="row-icon">{pad(v.id)}</div>
              <div className="row-body">
                <div className="row-name">{v.name}</div>
                <div className="row-desc">{v.summary}</div>
              </div>
              <span className="row-meta">{v.where}</span>
              <span className="row-action">View ↗</span>
            </Link>
          ))}
        </div>

        <h2 className="group-heading">Earlier rounds</h2>
        <div className="list">
          {EARLIER.map((e) => (
            <Link key={e.n} to={`/prototypes/consolidated-navigation-${e.n}`} className="row">
              <div className="row-icon row-icon-quiet">{e.n}</div>
              <div className="row-body">
                <div className="row-name">Consolidated Navigation {e.n}</div>
                <div className="row-desc">{e.desc}</div>
              </div>
              <span className="row-action">View ↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NavigationPage
