import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation8B.css'

function SubBrandNavigation8B() {
  // one design: Platforms label, Contact sales button and needs picker, demo and Log in buttons in the sub bars (see DEFAULT_CFG in variants.ts)
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn8b">
      <iframe className="sbn8b-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation8B
