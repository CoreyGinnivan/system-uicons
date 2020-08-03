import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Support = forwardRef(
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
          transform="translate(2 2)"
        >
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <circle cx="8.5" cy="8.5" r="4"></circle>
          <path d="m11.5 5.5 2.5-2.5"></path>
          <path d="m11.5 14 2.5-2.5" transform="matrix(0 1 -1 0 25.5 0)"></path>
          <path d="m3 14 2.5-2.5" transform="matrix(-1 0 0 -1 8.5 25.5)"></path>
          <path d="m3 5.5 2.5-2.5" transform="matrix(0 -1 1 0 0 8.5)"></path>
        </g>
      </svg>
    )
  }
)
Support.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Support.displayName = 'Support'
export default Support
