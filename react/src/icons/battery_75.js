import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Battery75 = forwardRef(
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
        <g fill="none" transform="translate(2 6)" fillRule="evenodd">
          <path
            d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v3c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-3c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m3 2h7c.5522847 0 1 .44771525 1 1v2.04629283c0 .55228475-.4477153 1-1 1h-7c-.55228475 0-1-.44771525-1-1v-2.04629283c0-.55228475.44771525-1 1-1z"
            fill="currentColor"
          ></path>
          <path
            d="m16.5 2.5v3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    )
  }
)
Battery75.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Battery75.displayName = 'Battery75'
export default Battery75
