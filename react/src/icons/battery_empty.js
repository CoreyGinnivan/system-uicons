import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const BatteryEmpty = forwardRef(
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
          transform="translate(2 6)"
        >
          <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v3c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-3c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m16.5 2.5v3"></path>
        </g>
      </svg>
    )
  }
)
BatteryEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BatteryEmpty.displayName = 'BatteryEmpty'
export default BatteryEmpty
