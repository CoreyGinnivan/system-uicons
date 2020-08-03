import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ width = 21, height = 21, color = '#2a2e3b' }) => (
  <svg width={width} height={height} viewBox="0 0 21 21">
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(-1 0 0 1 20 2)"
    >
      <path d="m8.5 2.56534572h2c3.3137085 0 6 2.6862915 6 6v1.93465428c0 3.3137085-2.6862915 6-6 6h-2c-3.3137085 0-6-2.6862915-6-6v-1.93465428c0-3.3137085 2.6862915-6 6-6z" />
      <path
        d="m3.94265851-.12029102c-1.05323083.28505997-1.86575682 1.17688618-1.86575682 2.30840383 0 1.16606183.73081563 2.21070886 1.78973019 2.50733508"
        transform="matrix(.62932039 .77714596 -.77714596 .62932039 2.893856 -1.491094)"
      />
      <path
        d="m16.9295345-.10708618c-1.0898445.26224883-1.9419712 1.17003523-1.9419712 2.3284815 0 1.16644061.7312905 2.21138754 1.7907622 2.50762392"
        transform="matrix(-.62932039 .77714596 .77714596 .62932039 24.205765 -11.545558)"
      />
      <path d="m9.5 5.5v4h-3.5" />
      <path d="m15 15 2 2" />
      <path d="m2 15 2 2" transform="matrix(-1 0 0 1 6 0)" />
    </g>
  </svg>
)

export default Icon
