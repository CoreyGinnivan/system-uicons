import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Height = forwardRef(
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
          transform="matrix(-.70710678 -.70710678 .70710678 -.70710678 10.315115 21.628661)"
        >
          <path
            d="m14.042 1.189-.033 5.69-5.624-.033"
            transform="matrix(-1 0 0 -1 15.414 8.482)"
          ></path>
          <path
            d="m7.678-1.414v18"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 7.801054 -2.793278)"
          ></path>
          <path
            d="m5.778.485v5.657h-5.657"
            transform="matrix(0 1 1 0 7.958 8.586)"
          ></path>
        </g>
      </svg>
    )
  }
)
Height.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Height.displayName = 'Height'
export default Height
