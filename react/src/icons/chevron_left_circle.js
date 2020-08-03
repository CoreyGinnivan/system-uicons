import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ChevronLeftCircle = forwardRef(
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
          stroke="#2A2E3B"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="matrix(-1 0 0 1 19 2)"
        >
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <polyline
            points="9.576 6.389 9.646 10.561 5.404 10.561"
            transform="scale(1 -1) rotate(-45 -12.935 0)"
          ></polyline>
        </g>
      </svg>
    )
  }
)
ChevronLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronLeftCircle.displayName = 'ChevronLeftCircle'
export default ChevronLeftCircle
