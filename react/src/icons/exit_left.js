import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ExitLeft = forwardRef(
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
          transform="matrix(-1 0 0 1 18 3)"
        >
          <path
            d="m12.717 5.379-.068 4.175-4.175.067"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 -2.199921 5.311079)"
          ></path>
          <path d="m9 3v9" transform="matrix(0 1 -1 0 16.5 -1.5)"></path>
          <path
            d="m-1.74806976 2.74806976.0022166 7.50105294c.00091744 1.1043385.89625231 1.9994088 2.00059101 1.9999999h9.99438475c1.1045695 0 2-.8954305 2-2v-7.50105284"
            transform="matrix(0 1 -1 0 12.749 2.249)"
          ></path>
        </g>
      </svg>
    )
  }
)
ExitLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ExitLeft.displayName = 'ExitLeft'
export default ExitLeft
