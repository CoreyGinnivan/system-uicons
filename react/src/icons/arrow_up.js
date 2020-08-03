import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ArrowUp = forwardRef(
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
          transform="translate(6 3)"
        >
          <polyline
            points="7.324 1.661 7.324 7.318 1.647 7.339"
            transform="scale(1 -1) rotate(45 15.35 0)"
          ></polyline>
          <line x1="4.5" x2="4.5" y1=".5" y2="13.5"></line>
        </g>
      </svg>
    )
  }
)
ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ArrowUp.displayName = 'ArrowUp'
export default ArrowUp
