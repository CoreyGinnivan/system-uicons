import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const CrossCircle = forwardRef(
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
          <g transform="matrix(0 1 -1 0 17 0)">
            <path d="m5.5 11.5 6-6"></path>
            <path d="m5.5 5.5 6 6"></path>
          </g>
        </g>
      </svg>
    )
  }
)
CrossCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CrossCircle.displayName = 'CrossCircle'
export default CrossCircle
