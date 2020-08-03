import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const DragCircle = forwardRef(
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
        >
          <circle cx="10.5" cy="10.5" r="8"></circle>
          <path d="m6.5 8.5h8"></path>
          <path d="m6.5 10.5h8"></path>
          <path d="m6.5 12.5h8"></path>
        </g>
      </svg>
    )
  }
)
DragCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
DragCircle.displayName = 'DragCircle'
export default DragCircle
