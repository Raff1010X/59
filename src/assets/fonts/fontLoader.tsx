// Load local fonts to use in CSS as variables or in components className

import localFont from 'next/font/local'

export const galanoBold = localFont({
  src: './galano/Galano bold.woff2', 
  variable: '--font-galano-bold',
  weight: '700',
  style: 'normal',
  display: 'block',
})

export const galanoNormal = localFont({
  src: './galano/Galano normal.woff2', 
  variable: '--font-galano-normal',
  weight: '500',
  style: 'normal',
  display: 'block',
})

export const galanoThin = localFont({
  src: './galano/Galano thin.woff2', 
  variable: '--font-galano-thin',
  weight: '200',
  style: 'normal',
  display: 'block',
})

export const fontsVariables = ` ${galanoBold.variable} ${galanoNormal.variable} ${galanoThin.variable}`