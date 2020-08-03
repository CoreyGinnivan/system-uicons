import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Versions = forwardRef(
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
          transform="translate(2 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m.5 8.5 8 4 8.017-4"></path>
          <path d="m.5 12.5 8 4 8.017-4"></path>
          <path d="m.5 4.657 8.008 3.843 8.009-3.843-8.009-4.157z"></path>
        </g>
      </svg>
    )
  }
)
Versions.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Versions.displayName = 'Versions'
export default Versions
