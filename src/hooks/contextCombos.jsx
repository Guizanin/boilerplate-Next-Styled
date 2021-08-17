import { createContext } from 'react'

export const combos = [
  {
    oferta: false,
    type: 'Casa',
    desc: 'Internet + Fixo',
    tag: 'Fique ligado!',
    mega: 500,
    value: 129,
    cents: 90
  },
  {
    oferta: false,
    type: 'Você',
    desc: 'Internet + Celular',
    tag: '#FeitoPraVc',
    mega: 500,
    value: 163,
    cents: 70
  },
  {
    oferta: true,
    type: 'Família',
    desc: 'Internet + Celular',
    tag: 'Melhor Oferta',
    mega: 500,
    value: 203,
    cents: 70
  },
  {
    oferta: false,
    type: 'Família total',
    desc: 'Internet + Fixo',
    tag: '#PraTodos',
    mega: 500,
    value: 220,
    cents: 70
  }
]

export default createContext({ combos })
