import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Gauge = forwardRef(
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
        <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
          <path
            d="m14 14c1.4477153-1.4477153 2.5-3.290861 2.5-5.5 0-4.418278-3.581722-8-8-8s-8 3.581722-8 8c0 2.209139 1.05228475 4.0522847 2.5 5.5"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m8.5 8.5-4-4"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <circle cx="8.5" cy="8.5" fill="#2a2e3b" r="1.5"></circle>
        </g>
      </svg>
    )
  }
)
Gauge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Gauge.displayName = 'Gauge'
export default Gauge
