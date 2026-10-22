import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { VARIANTS, buildDoc, pad } from './variants'
import './SubBrandNavigation.css'

const BRANDS = [
  { label: 'BigCommerce', path: '/bigcommerce' },
  { label: 'Feedonomics', path: '/feedonomics' },
]

function SubBrandCompare() {
  const [start, setStart] = useState(BRANDS[0].path)
  const docs = useMemo(() => VARIANTS.map((v) => buildDoc({ v: v.id, start })), [start])

  return (
    <div className="cmp">
      <header className="cmp-bar">
        <div className="cmp-bar-in">
          <Link to="/navigation" className="cmp-back">← Navigation</Link>
          <div className="sbn-seg" role="group" aria-label="Page">
            {BRANDS.map((b) => (
              <button key={b.path} type="button" className={start === b.path ? 'on' : ''} onClick={() => setStart(b.path)}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main className="cmp-main">
        <h1>Sub-brand navigation</h1>
        <p className="cmp-lede">
          Ten ways to show which brand someone is on. Each strip is the Commerce header plus the sub-brand bar,
          taken from the same prototype. Select one to open it and try the menus.
        </p>
        <div className="cmp-list">
          {VARIANTS.map((v, i) => (
            <section key={v.id} className="cmp-item">
              <div className="cmp-head">
                <span className="cmp-n">{pad(v.id)}</span>
                <h2>{v.name}</h2>
                <span className="cmp-where">{v.where}</span>
                <Link to={`/prototypes/sub-brand-navigation/${v.id}`} className="cmp-open">Open ↗</Link>
              </div>
              <p className="cmp-sum">{v.summary}</p>
              <div className="cmp-frame">
                <iframe title={`Variant ${v.id}: ${v.name}`} srcDoc={docs[i]} tabIndex={-1} scrolling="no" />
                <Link to={`/prototypes/sub-brand-navigation/${v.id}`} className="cmp-hit" aria-label={`Open variant ${v.id}: ${v.name}`} />
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default SubBrandCompare
