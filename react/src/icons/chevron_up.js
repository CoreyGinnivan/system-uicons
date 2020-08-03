import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ChevronUp = forwardRef(
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
        <polyline
          fill="none"
          stroke="#2A2E3B"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="7.328 1.672 7.328 7.328 1.672 7.328"
          transform="rotate(-135 9.157 7.258)"
        ></polyline>
      </svg>
    )
  }
)
ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronUp.displayName = 'ChevronUp'
export default ChevronUp
