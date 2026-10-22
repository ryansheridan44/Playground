import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MENUS, MENU_LAYOUTS, buildDoc } from './variants'
import './SubBrandNavigation.css'

function SubBrandMenus() {
  const [menuId, setMenuId] = useState(MENUS[0].id)
  const menu = MENUS.find((m) => m.id === menuId) ?? MENUS[0]
  const docs = useMemo(
    () => MENU_LAYOUTS.map((l) => buildDoc({ ml: l.id, start: menu.start, open: menu.id })),
    [menu],
  )

  return (
    <div className="cmp">
      <header className="cmp-bar">
        <div className="cmp-bar-in">
          <Link to="/navigation" className="cmp-back">← Navigation</Link>
          <select className="cmp-select" value={menuId} onChange={(e) => setMenuId(e.target.value)} aria-label="Menu">
            {MENUS.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>
      </header>
      <main className="cmp-main">
        <h1>Menu layouts</h1>
        <p className="cmp-lede">
          The same links in three arrangements. Every menu from the reference prototype is here, with no
          descriptions. Pick a menu above to see it in each layout.
        </p>
        <div className="cmp-list">
          {MENU_LAYOUTS.map((l, i) => (
            <section key={l.id} className="cmp-item">
              <div className="cmp-head">
                <span className="cmp-n">{l.name}</span>
                <h2>{l.title}</h2>
                <Link to={`/prototypes/sub-brand-navigation?ml=${l.id}`} className="cmp-open">Try it ↗</Link>
              </div>
              <p className="cmp-sum">{l.summary}</p>
              <div className="cmp-frame cmp-frame-menu">
                <iframe title={`Menu layout ${l.name}: ${l.title}`} srcDoc={docs[i]} tabIndex={-1} scrolling="no" />
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default SubBrandMenus
