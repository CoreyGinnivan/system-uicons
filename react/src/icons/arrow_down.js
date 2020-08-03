import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ArrowDown = forwardRef(
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
          transform="translate(6 4)"
        >
          <path
            d="m7.328 6.67.001 5.658-5.658-.001"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 .965201 -.399799)"
          ></path>
          <path d="m4.5.5v13"></path>
        </g>
      </svg>
    )
  }
)
ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ArrowDown.displayName = 'ArrowDown'
export default ArrowDown
