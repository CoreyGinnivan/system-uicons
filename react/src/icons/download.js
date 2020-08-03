import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Download = forwardRef(
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
          transform="translate(4 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m9.221 4.716.165 5.821-5.792-.135"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 5.685139 -2.354861)"
          ></path>
          <path d="m6.5.5v11"></path>
          <path d="m.5 14.5h12"></path>
        </g>
      </svg>
    )
  }
)
Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Download.displayName = 'Download'
export default Download
