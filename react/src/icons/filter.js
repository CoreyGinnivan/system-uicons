import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Filter = forwardRef(
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
          <path d="m4.5 7.5h12"></path>
          <path d="m6.5 10.5h8"></path>
          <path d="m8.5 13.5h4"></path>
        </g>
      </svg>
    )
  }
)
Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Filter.displayName = 'Filter'
export default Filter
