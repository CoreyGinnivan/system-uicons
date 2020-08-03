import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Version = forwardRef(
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
          transform="translate(2 4)"
        >
          <path d="m.5 8.5 8 4 8.017-4"></path>
          <path d="m.5 4.657 8.008 3.843 8.009-3.843-8.009-4.157z"></path>
        </g>
      </svg>
    )
  }
)
Version.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Version.displayName = 'Version'
export default Version
