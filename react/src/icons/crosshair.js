import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Crosshair = forwardRef(
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
          transform="translate(2 2)"
        >
          <path
            d="m16.5.5v3c0 1.1045695-.8954305 2-2 2h-3"
            transform="matrix(1 0 0 -1 0 6)"
          ></path>
          <path
            d="m7.086 9.914 2.828-2.828"
            transform="matrix(.70710678 -.70710678 .70710678 .70710678 -3.520815 8.5)"
          ></path>
          <path
            d="m9.91421356 9.91421356-2.82842712-2.82842712z"
            transform="matrix(.70710678 -.70710678 .70710678 .70710678 -3.520815 8.5)"
          ></path>
          <path d="m16.5 11.5v3c0 1.1045695-.8954305 2-2 2h-3"></path>
          <path
            d="m5.5 5.5h-3c-1.1045695 0-2-.8954305-2-2v-3"
            transform="matrix(1 0 0 -1 0 6)"
          ></path>
          <path d="m5.5 16.5h-3c-1.1045695 0-2-.8954305-2-2v-3"></path>
        </g>
      </svg>
    )
  }
)
Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Crosshair.displayName = 'Crosshair'
export default Crosshair
