import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import html from './navigation.html?raw'
import './ConsolidatedNavigation.css'

const ORIGIN = 'https://www.commerce.com'
const URL_BAR_HEIGHT = 40
const TOGGLE_HEIGHT = 32

function ConsolidatedNavigation() {
  const frame = useRef<HTMLIFrameElement>(null)
  const [path, setPath] = useState('/')
  const [draft, setDraft] = useState('/')
  const [showUrl, setShowUrl] = useState(false)
  const [ctaY, setCtaY] = useState<number | null>(null)

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return
      if (e.data?.type === 'consolidated-nav:cta') {
        setCtaY(e.data.y)
        return
      }
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

  // Keep the toggle vertically centered on the nav's main CTA button.
  const toggleTop =
    ctaY === null
      ? undefined
      : ctaY + (showUrl ? URL_BAR_HEIGHT : 0) - TOGGLE_HEIGHT / 2

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
      <button
        type="button"
        className="consolidated-nav-toggle"
        style={{ top: toggleTop }}
        onClick={() => setShowUrl((v) => !v)}
        aria-pressed={showUrl}
      >
        {showUrl ? 'Hide URL' : 'Show URL'}
      </button>
    </div>
  )
}

export default ConsolidatedNavigation
