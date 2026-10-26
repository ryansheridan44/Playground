import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation8A.css'

function SubBrandNavigation8A() {
  // one design: Centered nav, no mark in the sub bar, "Solutions /" prefix, small icons in the dropdowns (see DEFAULT_CFG in variants.ts)
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn8a">
      <iframe className="sbn8a-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation8A
