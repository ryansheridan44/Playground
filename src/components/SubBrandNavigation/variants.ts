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
    name: 'Color wordmark',
    where: 'Sub bar',
    summary: 'The full sub-brand logo in its native color.',
    tests: 'Does color add clarity? BigCommerce’s logo is already black, so this differs from 5 on Feedonomics.',
  },
  {
    id: 7,
    name: 'Header breadcrumb',
    where: 'Commerce header',
    summary: 'Commerce / BigCommerce in the global header. The sub bar carries links only.',
    tests: 'Does a parent-first path read as one company? The header hides on scroll, so the name does too.',
  },
  {
    id: 8,
    name: 'Header chip',
    where: 'Commerce header',
    summary: 'A pill with the mark and name next to the Commerce logo. The sub bar carries links only.',
    tests: 'Does a contained chip read as “you are here” or as a button?',
  },
  {
    id: 9,
    name: 'Inverted bar',
    where: 'Sub bar',
    summary: 'A black sub bar with a white mark and name.',
    tests: 'Does a change in contrast signal “you are in a product” better than any mark?',
  },
  {
    id: 10,
    name: 'Tinted bar',
    where: 'Sub bar',
    summary: 'A pale brand-tinted sub bar with a black mark and name.',
    tests: 'Can color live in the bar instead of the mark and still stay subdued?',
  },
]

export const PAGES = [
  { label: 'Commerce', path: '/' },
  { label: 'BigCommerce', path: '/bigcommerce' },
  { label: 'Feedonomics', path: '/feedonomics' },
]

const DEFAULT_CFG = "var CFG = {v:1,mm:'tile',start:''};"

export function buildDoc(v: number, mm: MenuMarks, start: string) {
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify({ v, mm, start })};`)
}

export const pad = (n: number) => String(n).padStart(2, '0')
