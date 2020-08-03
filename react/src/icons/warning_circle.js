import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const WarningCircle = forwardRef(
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
        <g fill="none" fill-rule="evenodd">
          <circle
            cx="10.5"
            cy="10.5"
            r="8"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
          <path
            d="m10.5 11.5v-5"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <circle cx="10.5" cy="14.5" fill="#2a2e3b" r="1"></circle>
        </g>
      </svg>
    )
  }
)
WarningCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
WarningCircle.displayName = 'WarningCircle'
export default WarningCircle
