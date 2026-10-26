import raw from './sub-brand-navigation.html?raw'

export interface Config {
  sv?: string
  bt?: number
  sl?: boolean
  nl?: string
  feats?: boolean
  start?: string
}

// the single design: Black mark (sv), button layout 1 (bt), "Solutions /" prefix (sl), Centered nav (nl)
const DEFAULT_CFG = "var CFG = {sv:'black',bt:1,sl:true,nl:'panel',feats:true,start:''};"

export function buildDoc(cfg: Config) {
  const full = { sv: 'black', bt: 1, sl: true, nl: 'panel', feats: true, start: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}
