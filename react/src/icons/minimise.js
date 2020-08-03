import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Minimise = forwardRef(
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
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5.5.5v5h-5.5" transform="matrix(1 0 0 -1 0 15)"></path>
          <path d="m5.5.5v5h-5.5" transform="matrix(-1 0 0 -1 15 15)"></path>
          <path d="m5.5.5v5.5h-5" transform="matrix(0 1 1 0 -.5 0)"></path>
          <path d="m5.5.5v5.5h-5" transform="matrix(0 1 -1 0 15.5 0)"></path>
        </g>
      </svg>
    )
  }
)
Minimise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Minimise.displayName = 'Minimise'
export default Minimise
