import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { PAGES, VARIANTS, buildDoc, pad } from './variants'
import type { MenuMarks } from './variants'
import './SubBrandNavigation.css'

const MARKS: { label: string; value: MenuMarks }[] = [
  { label: 'Tile', value: 'tile' },
  { label: 'Black', value: 'black' },
  { label: 'None', value: 'none' },
]

const brandOf = (path: string) =>
  path.startsWith('/bigcommerce') ? '/bigcommerce' : path.startsWith('/feedonomics') ? '/feedonomics' : '/'

function SubBrandNavigation() {
  const { variant } = useParams()
  const id = Number(variant)
  if (!Number.isInteger(id) || id < 1 || id > VARIANTS.length) {
    return <Navigate to="/prototypes/sub-brand-navigation/1" replace />
  }
  return <Explorer id={id} />
}

function Explorer({ id }: { id: number }) {
  const navigate = useNavigate()
  const frame = useRef<HTMLIFrameElement>(null)
  const [mm, setMm] = useState<MenuMarks>('tile')
  const [path, setPath] = useState('/bigcommerce')
  const [open, setOpen] = useState(true)
  const v = VARIANTS[id - 1]

  // the document is built once; later changes reach the iframe by message so the page never reloads
  const doc = useMemo(() => buildDoc(id, 'tile', '/bigcommerce'), []) // eslint-disable-line react-hooks/exhaustive-deps

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
    post({ type: 'consolidated-nav:config', v: id, mm })
  }, [id, mm])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      const next = id + (e.key === 'ArrowRight' ? 1 : -1)
      if (next >= 1 && next <= VARIANTS.length) navigate(`/prototypes/sub-brand-navigation/${next}`, { replace: true })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [id, navigate])

  const go = (n: number) => navigate(`/prototypes/sub-brand-navigation/${n}`, { replace: true })

  return (
    <div className="sbn">
      <iframe
        ref={frame}
        className="sbn-frame"
        title={`Sub-brand navigation ${id}: ${v.name}`}
        srcDoc={doc}
      />
      <aside className={`sbn-dock${open ? '' : ' closed'}`} aria-label="Variant controls">
        <div className="sbn-top">
          <Link to="/navigation" className="sbn-link">← All</Link>
          <Link to="/prototypes/sub-brand-navigation/compare" className="sbn-link">Compare</Link>
          <button type="button" className="sbn-link sbn-fold" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? 'Hide' : `${pad(id)} ${v.name}`}
          </button>
        </div>
        {open && (
          <>
            <div className="sbn-head">
              <button type="button" className="sbn-step" onClick={() => go(id - 1)} disabled={id === 1} aria-label="Previous variant">‹</button>
              <div className="sbn-title">
                <span className="sbn-num">{pad(id)} / {VARIANTS.length}</span>
                <strong>{v.name}</strong>
              </div>
              <button type="button" className="sbn-step" onClick={() => go(id + 1)} disabled={id === VARIANTS.length} aria-label="Next variant">›</button>
            </div>
            <div className="sbn-pills" role="group" aria-label="Variants">
              {VARIANTS.map((x) => (
                <button key={x.id} type="button" className={x.id === id ? 'on' : ''} onClick={() => go(x.id)} aria-label={`${x.id}: ${x.name}`} aria-pressed={x.id === id}>
                  {x.id}
                </button>
              ))}
            </div>
            <p className="sbn-note">{v.summary}</p>
            <p className="sbn-note sbn-tests"><span>Tests</span> {v.tests}</p>
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
              <span>Menu marks</span>
              <div className="sbn-seg" role="group" aria-label="Menu marks">
                {MARKS.map((m) => (
                  <button key={m.value} type="button" className={mm === m.value ? 'on' : ''} onClick={() => setMm(m.value)}>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default SubBrandNavigation
