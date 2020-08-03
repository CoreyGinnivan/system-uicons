import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ResetAlt = forwardRef(
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
          transform="matrix(-1 0 0 1 20 2)"
        >
          <path d="m5.5 1.5c-2.4138473 1.37729434-4 4.02194088-4 7 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>
          <path d="m5.5 1.5v5h-5" transform="matrix(1 0 0 -1 0 8)"></path>
        </g>
      </svg>
    )
  }
)
ResetAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ResetAlt.displayName = 'ResetAlt'
export default ResetAlt
