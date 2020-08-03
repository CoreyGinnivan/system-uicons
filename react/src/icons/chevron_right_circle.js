import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ChevronRightCircle = forwardRef(
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
          transform="translate(2 2)"
        >
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <polyline
            points="9.628 6.362 9.628 10.604 5.338 10.556"
            transform="scale(1 -1) rotate(-45 -12.997 0)"
          ></polyline>
        </g>
      </svg>
    )
  }
)
ChevronRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronRightCircle.displayName = 'ChevronRightCircle'
export default ChevronRightCircle
