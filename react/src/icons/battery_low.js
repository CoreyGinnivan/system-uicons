import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const BatteryLow = forwardRef(
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
        <g fill="none" fill-rule="evenodd" transform="translate(2 6)">
          <path
            d="m2.5.49734981h10c1.1045695 0 2 .8954305 2 2v3.00265019c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-3.00265019c0-1.1045695.8954305-2 2-2z"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m3 2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1z"
            fill="#2a2e3b"
          ></path>
          <path
            d="m16.5 2.5v1.5 1.5"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    )
  }
)
BatteryLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BatteryLow.displayName = 'BatteryLow'
export default BatteryLow
