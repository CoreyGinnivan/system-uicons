import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ZoomIn = forwardRef(
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
          transform="translate(3 3)"
        >
          <circle cx="5.5" cy="5.5" r="5"></circle>
          <path d="m7.5 5.5h-4zm-1.96446609 2-.03553391-4.1877161z"></path>
          <path d="m14.5 14.5-5.5-5.5"></path>
        </g>
      </svg>
    )
  }
)
ZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ZoomIn.displayName = 'ZoomIn'
export default ZoomIn
