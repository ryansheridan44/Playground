import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { buildDoc } from './variants'
import './SubBrandNavigation7.css'

function SubBrandNavigation7() {
  // one design: Centered nav, Black mark, no "Solution /" prefix, button layout 1 (see DEFAULT_CFG in variants.ts)
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn7">
      <iframe className="sbn7-frame" title="Consolidated navigation prototype" srcDoc={doc} />
      <Link to="/" className="sbn7-back">← Playground</Link>
    </div>
  )
}

export default SubBrandNavigation7
