import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const PushRight = forwardRef(
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
          transform="matrix(0 1 -1 0 17.5 3.5)"
        >
          <path
            d="m9.828 1.672v5.656h-5.656"
            transform="matrix(.70710678 -.70710678 -.70710678 -.70710678 5.232244 12.631756)"
          ></path>
          <path d="m7 .5v11"></path>
          <path d="m0 14.5h14"></path>
        </g>
      </svg>
    )
  }
)
PushRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
PushRight.displayName = 'PushRight'
export default PushRight
