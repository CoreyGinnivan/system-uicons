import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CheckCircle = forwardRef(
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
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <path d="m5.5 9.5 2 2 5-5"></path>
        </g>
      </svg>
    )
  }
)
CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CheckCircle.displayName = 'CheckCircle'
export default CheckCircle
