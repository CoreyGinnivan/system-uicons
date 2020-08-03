import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Reverse = forwardRef(
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
          transform="matrix(0 -1 1 0 4 19)"
        >
          <path
            d="m15.328 5.672v5.656h-5.656"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 15.328661 -6.349339)"
          ></path>
          <path d="m12.5.5v12"></path>
          <path
            d="m7.328 1.672h-5.656v5.656"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 4.500028 -1.863972)"
          ></path>
          <path d="m4.5.5v12"></path>
        </g>
      </svg>
    )
  }
)
Reverse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Reverse.displayName = 'Reverse'
export default Reverse
