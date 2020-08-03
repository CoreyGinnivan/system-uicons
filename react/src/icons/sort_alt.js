import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const SortAlt = forwardRef(
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
          stroke={color}
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g transform="rotate(-180 9 9.5) translate(0 8)">
            <polyline
              points="6.828 1.172 6.828 6.828 1.172 6.828"
              transform="scale(1 -1) rotate(45 13.657 0)"
            ></polyline>
            <line x1="4" x2="4" y2="8.929"></line>
          </g>
          <g transform="rotate(-180 9 9.5) translate(7)">
            <polyline
              points="7.813 4.051 7.844 9.739 2.156 9.708"
              transform="scale(-1 1) rotate(45 0 -5.176)"
            ></polyline>
            <line x1="5" x2="5" y1=".908" y2="10.917"></line>
          </g>
        </g>
      </svg>
    )
  }
)
SortAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
SortAlt.displayName = 'SortAlt'
export default SortAlt
