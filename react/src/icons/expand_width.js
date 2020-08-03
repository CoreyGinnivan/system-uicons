import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ExpandWidth = forwardRef(
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
          transform="translate(1 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m9.45.814v5.657h-5.657"
            transform="matrix(-.70710678 .70710678 -.70710678 -.70710678 14.756959 6.39283)"
          ></path>
          <path
            d="m5.197-.948v12.028"
            transform="matrix(0 1 1 0 4.447762 3.302301)"
          ></path>
          <path
            d="m6.167.136-.04 5.697h-5.656"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 7.043131 8.291412)"
          ></path>
          <path d="m.5.5v16.021"></path>
          <path d="m18.5.5v16.021"></path>
        </g>
      </svg>
    )
  }
)
ExpandWidth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ExpandWidth.displayName = 'ExpandWidth'
export default ExpandWidth
