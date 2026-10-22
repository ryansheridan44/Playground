import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BUTTON_VARIATIONS, NAV_LAYOUTS, PAGES, VISIBILITY, buildDoc } from './variants'
import type { NavLayout, SubBrandVisibility } from './variants'
import './SubBrandNavigation.css'

const brandOf = (path: string) =>
  path.startsWith('/bigcommerce') ? '/bigcommerce' : path.startsWith('/feedonomics') ? '/feedonomics' : '/'

function SubBrandNavigation() {
  const frame = useRef<HTMLIFrameElement>(null)
  const [sv, setSv] = useState<SubBrandVisibility>('mark')
  const [bt, setBt] = useState(1)
  const [sl, setSl] = useState(true)
  const [nl, setNl] = useState<NavLayout>('full')
  const [path, setPath] = useState('/bigcommerce')
  const [open, setOpen] = useState(true)

  // the document is built once; later changes reach the iframe by message so the page never reloads
  const doc = useMemo(() => buildDoc({ start: '/bigcommerce' }), []) // eslint-disable-line react-hooks/exhaustive-deps

  const post = (msg: object) => frame.current?.contentWindow?.postMessage(msg, '*')

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return
      if (e.data?.type === 'consolidated-nav:path') setPath(e.data.path)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    post({ type: 'consolidated-nav:config', sv, bt, sl, nl })
  }, [sv, bt, sl, nl])

  return (
    <div className="sbn">
      <iframe ref={frame} className="sbn-frame" title="Sub-brand navigation prototype" srcDoc={doc} />
      <aside className={`sbn-dock${open ? '' : ' closed'}`} aria-label="Prototype controls">
        <div className="sbn-top">
          <Link to="/" className="sbn-link">← Playground</Link>
          <button type="button" className="sbn-link sbn-fold" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? 'Hide' : 'Controls'}
          </button>
        </div>
        {open && (
          <>
            <label className="sbn-check">
              <input type="checkbox" checked={sl} disabled={sv === 'mark-only'} onChange={(e) => setSl(e.target.checked)} />
              <span>Show “Solution /” before the sub-brand name</span>
            </label>
            <div className="sbn-row">
              <span>Page</span>
              <div className="sbn-seg" role="group" aria-label="Page">
                {PAGES.map((p) => (
                  <button key={p.path} type="button" className={brandOf(path) === p.path ? 'on' : ''} onClick={() => post({ type: 'consolidated-nav:go', path: p.path })}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="sbn-row">
              <span>Navigation</span>
              <div className="sbn-seg" role="group" aria-label="Navigation">
                {NAV_LAYOUTS.map((n) => (
                  <button key={n.value} type="button" className={nl === n.value ? 'on' : ''} onClick={() => setNl(n.value)} title={n.summary}>
                    {n.label}
                  </button>
                ))}
              </div>
              <p className="sbn-note">{NAV_LAYOUTS.find((n) => n.value === nl)?.summary}</p>
            </div>
            <div className="sbn-row">
              <span>Sub-brand visibility</span>
              <div className="sbn-seg" role="group" aria-label="Sub-brand visibility">
                {VISIBILITY.map((v) => (
                  <button key={v.value} type="button" className={sv === v.value ? 'on' : ''} onClick={() => setSv(v.value)} title={v.summary}>
                    {v.label}
                  </button>
                ))}
              </div>
              <p className="sbn-note">{VISIBILITY.find((v) => v.value === sv)?.summary}</p>
            </div>
            <div className="sbn-row">
              <span>Button variations</span>
              <div className="sbn-seg" role="group" aria-label="Button variations">
                {BUTTON_VARIATIONS.map((b) => (
                  <button key={b.id} type="button" className={bt === b.id ? 'on' : ''} onClick={() => setBt(b.id)} title={b.name}>
                    {b.id}
                  </button>
                ))}
              </div>
              <p className="sbn-note"><strong>{BUTTON_VARIATIONS[bt - 1].name}.</strong> {BUTTON_VARIATIONS[bt - 1].summary}</p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default SubBrandNavigation
