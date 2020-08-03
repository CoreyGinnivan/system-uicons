import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const HeartRate = forwardRef(
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
        <path
          d="m0 6.5h2l2.5-6 2 12 3-9 2.095 6 1.405-3h2"
          fill="none"
          stroke={color}
          transform="translate(3 4)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
HeartRate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
HeartRate.displayName = 'HeartRate'
export default HeartRate
