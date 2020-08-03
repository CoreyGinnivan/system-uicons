import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ChevronDown = forwardRef(
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
          d="m8.5.5-4 4-4-4"
          fill="none"
          stroke={color}
          transform="translate(6 8)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronDown.displayName = 'ChevronDown'
export default ChevronDown
