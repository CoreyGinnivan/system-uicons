import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Compass = forwardRef(
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
          <polygon
            points="8.5 3.5 10.5 8.5 8.5 13.5 6.5 8.5"
            transform="rotate(30 8.5 8.5)"
          ></polygon>
        </g>
      </svg>
    )
  }
)
Compass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Compass.displayName = 'Compass'
export default Compass
