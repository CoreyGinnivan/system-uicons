import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const BrowserAlt = forwardRef(
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
          transform="translate(2 3)"
        >
          <path
            d="m13-1h-9c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z"
            transform="matrix(0 1 -1 0 15.5 -1.5)"
          ></path>
          <path
            d="m7.99999972 5.00000002h-7c-.55228475 0-1 .44771525-1 1v2c0 .55228475.44771525 1 1 1h7c.55228475 0 1-.44771525 1-1v-2c0-.55228475-.44771525-1-1-1z"
            transform="matrix(0 1 -1 0 11.5 2.5)"
          ></path>
          <path
            d="m11.9999996.99999966h-1c-.5522848 0-1.00000003.44771525-1.00000003 1v4c0 .55228475.44771523 1 1.00000003 1h1c.5522847 0 1-.44771525 1-1v-4c0-.55228475-.4477153-1-1-1z"
            transform="matrix(0 1 -1 0 15.5 -7.5)"
          ></path>
          <path
            d="m12.4999997 6.50000002h-2c-.55228473 0-.99999998.44771525-.99999998 1v3.99999998c0 .5522848.44771525 1 .99999998 1h2c.5522848 0 1-.4477152 1-1v-3.99999998c0-.55228475-.4477152-1-1-1z"
            transform="matrix(0 1 -1 0 21 -2)"
          ></path>
        </g>
      </svg>
    )
  }
)
BrowserAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BrowserAlt.displayName = 'BrowserAlt'
export default BrowserAlt
