import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const InfoCircle = forwardRef(
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
        <g fill="none" fillRule="evenodd">
          <circle
            cx="10.5"
            cy="10.5"
            r="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <path
            d="m10.5 14.5v-4"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="10.5" cy="7.5" fill={color} r="1"></circle>
        </g>
      </svg>
    )
  }
)
InfoCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
InfoCircle.displayName = 'InfoCircle'
export default InfoCircle
