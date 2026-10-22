import raw from './sub-brand-navigation.html?raw'

export type SubBrandVisibility = 'mark' | 'black' | 'shape' | 'text' | 'mark-only'

export type NavLayout = 'full' | 'floating' | 'panel'

export interface Config {
  sv?: SubBrandVisibility
  bt?: number
  start?: string
}

const DEFAULT_CFG = "var CFG = {sv:'mark',bt:1,start:''};"

export function buildDoc(cfg: Config) {
  const full = { sv: 'mark', bt: 1, start: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}

export const VISIBILITY: { value: SubBrandVisibility; label: string; summary: string }[] = [
  { value: 'mark', label: 'Mark', summary: 'The logo mark in white on a black tile.' },
  { value: 'black', label: 'Black mark', summary: 'The logo mark in black, no tile.' },
  { value: 'shape', label: 'Shape', summary: 'Just the shape of the mark: a triangle for BigCommerce, a diamond for Feedonomics.' },
  { value: 'text', label: 'Text', summary: 'No marks anywhere. Names only.' },
  { value: 'mark-only', label: 'Mark only', summary: 'The bare black mark, no name in the sub-brand bar, then a divider.' },
]

export const NAV_LAYOUTS: { value: NavLayout; label: string; summary: string }[] = [
  { value: 'full', label: 'Full width', summary: 'Bars run edge to edge. Dropdowns float below as rounded cards.' },
  { value: 'floating', label: 'Floating', summary: 'Both bars float in rounded cards 16px from the page edges. Dropdowns float below as cards.' },
  { value: 'panel', label: 'Centered', summary: 'A narrower, centered floating nav (3/4 of the screen) with 120px between the links and the actions. Dropdowns are full width panels attached under a divider.' },
]

export const BUTTON_VARIATIONS = [
  {
    id: 1,
    name: 'Global primary',
    summary: 'Commerce: two links and a solid Get started. Sub-brand: a link and an outlined button.',
  },
  {
    id: 2,
    name: 'Links up top',
    summary: 'Commerce bar is all plain links. The sub-brand bar carries the buttons: demo outlined, trial solid.',
  },
  {
    id: 3,
    name: 'One button',
    summary: 'Get started is the only button. Sub-brand CTAs are plain links.',
  },
  {
    id: 4,
    name: 'Compact one button',
    summary: 'Like One button, with a smaller Get started and every main and sub-brand nav link at the same 14px.',
  },
]

export const PAGES = [
  { label: 'Commerce', path: '/' },
  { label: 'BigCommerce', path: '/bigcommerce' },
  { label: 'Feedonomics', path: '/feedonomics' },
]
