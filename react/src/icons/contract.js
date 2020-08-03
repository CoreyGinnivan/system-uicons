import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Contract = forwardRef(
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
          transform="translate(2 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m7.5.5v5.056h-5.5"
            transform="matrix(1 0 0 -1 0 15.056)"
          ></path>
          <path
            d="m3.968-1.007.064 9.964"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 3.982322 7.335823)"
          ></path>
          <path
            d="m7.512.5v5.5h-5.012"
            transform="matrix(0 1 -1 0 15.5 0)"
          ></path>
          <path
            d="m4.01-.954-.008 9.908"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 7.338903 4.001757)"
          ></path>
        </g>
      </svg>
    )
  }
)
Contract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Contract.displayName = 'Contract'
export default Contract
