import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Toggle = forwardRef(
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
          transform="translate(2 5)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6.5" cy="6.5" r="6"></circle>
          <path d="m7.5 12.5h3c3.3137085 0 6-2.6862915 6-6s-2.6862915-6-6-6h-2"></path>
        </g>
      </svg>
    )
  }
)
Toggle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Toggle.displayName = 'Toggle'
export default Toggle
