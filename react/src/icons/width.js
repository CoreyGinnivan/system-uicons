import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Width = forwardRef(
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
          transform="matrix(.70710678 -.70710678 .70710678 .70710678 .121489 10.313301)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m13.571.682v5.657l-5.667.01"
            transform="matrix(-1 0 0 -1 14.414 7.445)"
          ></path>
          <path
            d="m7.207-1.944v18"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 7.313773 -2.615464)"
          ></path>
          <path
            d="m6.289.015-.04 5.696h-5.657"
            transform="matrix(0 1 1 0 7.86 7.586)"
          ></path>
        </g>
      </svg>
    )
  }
)
Width.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Width.displayName = 'Width'
export default Width
