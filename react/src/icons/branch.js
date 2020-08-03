import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Branch = forwardRef(
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
          transform="matrix(-1 0 0 1 17.335 3)"
        >
          <path d="m12.835.5v5h-5" transform="matrix(1 0 0 -1 0 6)"></path>
          <path
            d="m7.006.429v8.485l5.657 5.657"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 8.183906 -4.757696)"
          ></path>
          <path d="m.835 4.5 4-4" transform="matrix(-1 0 0 1 5.669 0)"></path>
        </g>
      </svg>
    )
  }
)
Branch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Branch.displayName = 'Branch'
export default Branch
