/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const format = require('prettier-eslint')
const upperCamelCase = require('uppercamelcase')
const camelCase = require('camelcase')
const cheerio = require('cheerio')

const rootDir = path.join(__dirname, '..')

const iconDir = path.join(rootDir, '../src/images/icons')
const icons = fs.readdirSync(iconDir).map((name) => name.split('.')[0])

const outputDir = path.join(rootDir, 'src/icons')

console.log({ iconDir, icons, outputDir })

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

const initialTypeDefinitions = `/// <reference types="react" />
import { FC, SVGAttributes } from 'react';
interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
type Icon = FC<Props>;
`

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8')
fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8'
)

const attrsToString = (attrs) => {
  return Object.keys(attrs)
    .map((key) => {
      if (key === 'width' || key === 'height' || key === 'stroke') {
        return key + '={' + attrs[key] + '}'
      }
      if (key === 'rest') {
        return '{...rest}'
      }
      return key + '="' + attrs[key] + '"'
    })
    .join(' ')
}

const getIconContents = (path) => {
  const icon = fs.readFileSync(path, 'utf8')
  const $ = cheerio.load(icon)
  const svg = $('svg')

  svg.find('*').map((i, el) => {
    Object.entries(el.attribs).map(([attr, value]) => {
      if (attr.includes('-')) {
        // camel case attributes
        $(el).attr(attr, null) // remove old attribute
        $(el).attr(camelCase(attr), value) // add new one
      }
      if (attr === 'fill' || attr === 'stroke') {
        // set non-none fill/stroke to current color
        if (value !== 'none') {
          $(el).attr(attr, 'currentColor')
        }
      }
    })
  })

  return svg.html().replace(/"currentColor"/g, '{color}')
}

icons.forEach((i) => {
  const sourcePath = path.join(iconDir, `${i}.svg`)
  const location = path.join(outputDir, `${i}.js`)
  const ComponentName = upperCamelCase(i)

  // read SVG, extract whatever is inside <svg> tags
  const iconContents = getIconContents(sourcePath)

  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 21 21',
    fill: 'none',
    stroke: 'color',
    strokeWidth: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    rest: '...rest',
  }

  const element = `
    import React, {forwardRef} from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = forwardRef(({ color = 'currentColor', size = 21, ...rest }, ref) => {
      return (
        <svg ref={ref} ${attrsToString(defaultAttrs)}>
          ${iconContents}
        </svg>
      )
    });
    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }
    ${ComponentName}.displayName = '${ComponentName}'
    export default ${ComponentName}
  `

  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  })

  fs.writeFileSync(location, component, 'utf-8')

  console.log('Successfully built', ComponentName)

  const exportString = `export { default as ${ComponentName} } from './icons/${i}';\r\n`
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.js'),
    exportString,
    'utf-8'
  )

  const exportTypeString = `export const ${ComponentName}: Icon;\n`
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.d.ts'),
    exportTypeString,
    'utf-8'
  )
})
