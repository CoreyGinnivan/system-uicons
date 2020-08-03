import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Upload = forwardRef(
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
            d="m9.221 1.716.165 5.821-5.792-.135"
            transform="matrix(-.70710678 -.70710678 .70710678 -.70710678 7.80734 12.487906)"
          ></path>
          <path d="m6.5.5v11"></path>
          <path d="m.5 14.5h12"></path>
        </g>
      </svg>
    )
  }
)
Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Upload.displayName = 'Upload'
export default Upload
