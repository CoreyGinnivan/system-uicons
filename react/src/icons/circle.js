import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Circle = forwardRef(
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
        <circle
          cx="10.5"
          cy="10.5"
          fill="none"
          r="8"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></circle>
      </svg>
    )
  }
)
Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Circle.displayName = 'Circle'
export default Circle
