import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Shuffle = forwardRef(
  ({ color = 'currentColor', size = 21, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="matrix(0 1 -1 0 17 3)"
        >
          <g transform="translate(6)">
            <path
              d="m7.621 6.378.001 4.243-4.244-.001"
              transform="matrix(-.70710678 .70710678 .70710678 .70710678 3.379263 -1.399737)"
            ></path>
            <path d="m.5.5h2c1.65685425 0 3 1.34314575 3 3v8"></path>
          </g>
          <g transform="matrix(-1 0 0 -1 9 13)">
            <path
              d="m7.621 6.378.001 4.243-4.244-.001"
              transform="matrix(-.70710678 .70710678 .70710678 .70710678 3.379263 -1.399737)"
            ></path>
            <path d="m.5.5h2c1.65685425 0 3 1.34314575 3 3v8"></path>
          </g>
        </g>
      </svg>
    )
  }
)
Shuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Shuffle.displayName = 'Shuffle'
export default Shuffle
