import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ExpandHeight = forwardRef(
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
          transform="rotate(-90 11.5 9.5)"
        >
          <line
            x1="14.243"
            x2="5.757"
            y1="3.757"
            y2="12.243"
            transform="rotate(45 10 8)"
          ></line>
          <polyline
            points="11.988 4 16 8 11.988 12"
            transform="matrix(1 0 0 -1 0 16)"
          ></polyline>
          <polyline
            points="3.988 4 8 8 3.988 12"
            transform="rotate(-180 5.994 8)"
          ></polyline>
          <line x1="1" x2="1" y2="16"></line>
          <line x1="19" x2="19" y2="16"></line>
        </g>
      </svg>
    )
  }
)
ExpandHeight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ExpandHeight.displayName = 'ExpandHeight'
export default ExpandHeight
