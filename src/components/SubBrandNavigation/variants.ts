import raw from './sub-brand-navigation.html?raw'

export type MenuMarks = 'tile' | 'black' | 'none'

export interface Variant {
  id: number
  name: string
  where: 'Sub bar' | 'Commerce header'
  summary: string
  tests: string
}

export const VARIANTS: Variant[] = [
  {
    id: 1,
    name: 'Text label',
    where: 'Sub bar',
    summary: 'The sub-brand name in plain text. No mark.',
    tests: 'Baseline. Is a name alone enough to tell someone they are on BigCommerce?',
  },
  {
    id: 2,
    name: 'Black mark + name',
    where: 'Sub bar',
    summary: 'The monochrome logo mark beside the name.',
    tests: 'Does a small mark add recognition without adding color?',
  },
  {
    id: 3,
    name: 'Color tile + name',
    where: 'Sub bar',
    summary: 'The mark sits in the same pastel tile used in the Solutions menu.',
    tests: 'Does matching the menu tile help people connect the bar to the picker?',
  },
  {
    id: 4,
    name: 'Mark only',
    where: 'Sub bar',
    summary: 'A black mark with no name. The name shows on hover.',
    tests: 'The most subdued option. Do BigCommerce regulars recognize the mark on its own?',
  },
  {
    id: 5,
    name: 'Black wordmark',
    where: 'Sub bar',
    summary: 'The full sub-brand logo in black, in place of the name.',
    tests: 'Does a recognizable wordmark reassure people enough to offset losing their own header?',
  },
  {
    id: 6,
    name: 'Brand switcher',
    where: 'Sub bar',
    summary: 'The name sits in a bordered control with a chevron. Selecting it lists Commerce, BigCommerce and Feedonomics.',
    tests: 'Do people discover they can move between brands from here, and does it feel like a switcher or a menu?',
  },
  {
    id: 7,
    name: 'Solid tag',
    where: 'Sub bar',
    summary: 'A compact black tag with a white mark and name, like a product label.',
    tests: 'Does a small contained block say “you are in a product” without a mark or color carrying it?',
  },
  {
    id: 8,
    name: 'Island bar',
    where: 'Sub bar',
    summary: 'The sub bar becomes a rounded tinted island inside the page width instead of a full-bleed bar.',
    tests: 'Does a contained, floating bar read as part of Commerce, in line with the floating menus?',
  },
  {
    id: 9,
    name: 'Name + descriptor',
    where: 'Sub bar',
    summary: 'The mark and name followed by a muted line saying what the brand is.',
    tests: 'Does saying what the brand is do more for clarity than how the brand looks?',
  },
  {
    id: 10,
    name: 'Brand tabs',
    where: 'Sub bar',
    summary: 'Commerce, BigCommerce and Feedonomics as tabs, with the current one marked and underlined.',
    tests: 'Can people move between the brands, and does showing all three weaken the parent brand?',
  },
]

export const PAGES = [
  { label: 'Commerce', path: '/' },
  { label: 'BigCommerce', path: '/bigcommerce' },
  { label: 'Feedonomics', path: '/feedonomics' },
]

export interface Config {
  v: number
  mm?: MenuMarks
  ml?: number
  start?: string
  open?: string
}

const DEFAULT_CFG = "var CFG = {v:1,mm:'tile',ml:1,start:'',open:''};"

export function buildDoc({ v, mm = 'tile', ml = 1, start = '', open = '' }: Config) {
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify({ v, mm, ml, start, open })};`)
}

export const MENU_LAYOUTS = [
  { id: 1, name: 'Columns', summary: 'One column per group, with section labels over related groups. A footer strip carries AI Labs.' },
  { id: 2, name: 'Cards', summary: 'Each group sits on its own tinted card. Promos become a black card.' },
  { id: 3, name: 'Rail', summary: 'Groups on a left rail. Hover one to see its links on the right.' },
  { id: 4, name: 'Rows', summary: 'One row per group with its links flowing across. The shortest, most scannable option for long lists.' },
  { id: 5, name: 'Band', summary: 'Columns for the main groups, with the lightest group moved into a footer band.' },
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

export const pad = (n: number) => String(n).padStart(2, '0')
