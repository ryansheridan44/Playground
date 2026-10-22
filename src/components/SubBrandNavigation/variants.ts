import raw from './sub-brand-navigation.html?raw'

export type SubBrandVisibility = 'mark' | 'black' | 'shape' | 'text'

export interface Config {
  ml?: number
  sv?: SubBrandVisibility
  bt?: number
  start?: string
  open?: string
}

const DEFAULT_CFG = "var CFG = {ml:1,sv:'mark',bt:1,start:'',open:''};"

export function buildDoc(cfg: Config) {
  const full = { ml: 1, sv: 'mark', bt: 1, start: '', open: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}

export const MENU_LAYOUTS = [
  { id: 1, name: 'A', title: 'Columns', summary: 'One column per group, with section labels over related groups.' },
  { id: 2, name: 'B', title: 'Columns + card', summary: 'Columns, with one card: the promo, or the lightest group.' },
  { id: 3, name: 'C', title: 'Columns + card + band', summary: 'Columns, one card, and a footer band for the lightest group.' },
]

export const VISIBILITY: { value: SubBrandVisibility; label: string; summary: string }[] = [
  { value: 'mark', label: 'Mark', summary: 'The logo mark in its brand color, on a soft tile.' },
  { value: 'black', label: 'Black mark', summary: 'The logo mark in black, no tile.' },
  { value: 'shape', label: 'Shape', summary: 'Just the shape of the mark: a triangle for BigCommerce, a diamond for Feedonomics.' },
  { value: 'text', label: 'Text', summary: 'No marks anywhere. Names only.' },
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
    name: 'Context swap',
    summary: 'On sub-brand pages the header button becomes the brand’s primary CTA (Free trial, Get a demo).',
  },
  {
    id: 5,
    name: 'Two-button header',
    summary: 'Contact sales becomes an outlined button beside a solid Get started, sized to match the sub-brand bar.',
  },
]

export const PAGES = [
  { label: 'Commerce', path: '/' },
  { label: 'BigCommerce', path: '/bigcommerce' },
  { label: 'Feedonomics', path: '/feedonomics' },
]

export const MENUS = [
  { id: 'solutions', label: 'Solutions', start: '/' },
  { id: 'learning', label: 'Learning', start: '/' },
  { id: 'bc-products', label: 'BigCommerce: Product Features', start: '/bigcommerce' },
  { id: 'bc-resources', label: 'BigCommerce: Resources', start: '/bigcommerce' },
  { id: 'fdx-products', label: 'Feedonomics: Product Features', start: '/feedonomics' },
  { id: 'fdx-integrations', label: 'Feedonomics: Integrations', start: '/feedonomics' },
  { id: 'fdx-resources', label: 'Feedonomics: Resources', start: '/feedonomics' },
]
