import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import html from './navigation.html?raw'
import './ConsolidatedNavigation.css'

const ORIGIN = 'https://www.commerce.com'

function ConsolidatedNavigation() {
  const frame = useRef<HTMLIFrameElement>(null)
  const [path, setPath] = useState('/')
  const [draft, setDraft] = useState('/')
  const [showUrl, setShowUrl] = useState(false)

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return
      if (e.data?.type !== 'consolidated-nav:path') return
      setPath(e.data.path)
      setDraft(e.data.path)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const go = (e: FormEvent) => {
    e.preventDefault()
    const next = draft.replace(ORIGIN, '').trim() || '/'
    frame.current?.contentWindow?.postMessage(
      { type: 'consolidated-nav:go', path: next },
      '*',
    )
  }

  return (
    <div className="consolidated-nav">
      {showUrl && (
        <form className="consolidated-nav-bar" onSubmit={go}>
          <span className="consolidated-nav-origin">{ORIGIN}</span>
          <input
            className="consolidated-nav-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => setDraft(path)}
            spellCheck={false}
            aria-label="Prototype URL path"
          />
        </form>
      )}
      <iframe
        ref={frame}
        className="consolidated-nav-frame"
        title="Consolidated Navigation"
        srcDoc={html}
      />
      <div className="consolidated-nav-badges">
        <Link to="/" className="consolidated-nav-badge">
          Home
        </Link>
        <button
          type="button"
          className="consolidated-nav-badge"
          onClick={() => setShowUrl((v) => !v)}
          aria-pressed={showUrl}
        >
          {showUrl ? 'Hide URL' : 'Show URL'}
        </button>
      </div>
    </div>
  )
}

export default ConsolidatedNavigation
