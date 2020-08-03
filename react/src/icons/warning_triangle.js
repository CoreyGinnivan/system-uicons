import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const WarningTriangle = forwardRef(
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
        <g fill="none" transform="translate(1 1)" fillRule="evenodd">
          <path
            d="m9.5.5 9 16h-18z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m9.5 10.5v-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="9.5" cy="13.5" fill="currentColor" r="1"></circle>
        </g>
      </svg>
    )
  }
)
WarningTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
WarningTriangle.displayName = 'WarningTriangle'
export default WarningTriangle
