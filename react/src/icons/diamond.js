import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Diamond = forwardRef(
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
          transform="translate(2 4)"
        >
          <path d="m13.5 0 3 4-8 10-8-10 3.009-4z"></path>
          <path d="m.5 4h16"></path>
          <path d="m5.5 4 3 10"></path>
          <path d="m11.5 4-3 10"></path>
          <path d="m3.509 0 1.991 4 3-4 3 4 2-4"></path>
        </g>
      </svg>
    )
  }
)
Diamond.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Diamond.displayName = 'Diamond'
export default Diamond
