import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Move = forwardRef(
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
          transform="translate(1 1)"
        >
          <path
            d="m15.864 3.136-12.728 12.728"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 9.5 -3.935029)"
          ></path>
          <path
            d="m3.136 3.136 12.728 12.728"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 9.5 -3.935029)"
          ></path>
          <path d="m15.5 6.5 3 3-3 3" transform="matrix(1 0 0 -1 0 19)"></path>
          <path d="m.5 6.5 3 3-3 3" transform="matrix(-1 0 0 -1 4 19)"></path>
          <path d="m12.5.5-3 3-3-3" transform="matrix(-1 0 0 -1 19 4)"></path>
          <path d="m12.5 15.5-3 3-3-3" transform="matrix(-1 0 0 1 19 0)"></path>
        </g>
      </svg>
    )
  }
)
Move.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Move.displayName = 'Move'
export default Move
