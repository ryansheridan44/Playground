import { Link } from 'react-router-dom'
import { BUTTON_VARIATIONS, MENU_LAYOUTS, VISIBILITY } from '../components/SubBrandNavigation/variants'

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
          One prototype with the floating-menu navigation and the reference menu content. A control panel at
          the bottom left switches three things: how the dropdowns are laid out, how visible the sub-brands
          are, and how the buttons on the right side of the bars are styled.
        </p>
        <div className="actions">
          <Link to="/prototypes/sub-brand-navigation" className="action action-primary">
            Open the prototype
          </Link>
          <Link to="/prototypes/sub-brand-navigation/menus" className="action">
            Compare the menu layouts
          </Link>
        </div>

        <h2 className="group-heading">Menu layout</h2>
        <div className="list">
          {MENU_LAYOUTS.map((m) => (
            <Link key={m.id} to={`/prototypes/sub-brand-navigation?ml=${m.id}`} className="row">
              <div className="row-icon">{m.name}</div>
              <div className="row-body">
                <div className="row-name">{m.title}</div>
                <div className="row-desc">{m.summary}</div>
              </div>
              <span className="row-action">View ↗</span>
            </Link>
          ))}
        </div>

        <h2 className="group-heading">Sub-brand visibility</h2>
        <div className="list">
          {VISIBILITY.map((v, i) => (
            <div key={v.value} className="row">
              <div className="row-icon row-icon-quiet">{i + 1}</div>
              <div className="row-body">
                <div className="row-name">{v.label}</div>
                <div className="row-desc">{v.summary}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="group-heading">Button variations</h2>
        <div className="list">
          {BUTTON_VARIATIONS.map((b) => (
            <div key={b.id} className="row">
              <div className="row-icon row-icon-quiet">{b.id}</div>
              <div className="row-body">
                <div className="row-name">{b.name}</div>
                <div className="row-desc">{b.summary}</div>
              </div>
            </div>
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
