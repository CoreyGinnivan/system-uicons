import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ChevronDownCircle = forwardRef(
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
          transform="rotate(90 8.5 10.5)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <polyline
            points="9.563 6.355 9.611 10.645 5.321 10.597"
            transform="scale(1 -1) rotate(-45 -13.055 0)"
          ></polyline>
        </g>
      </svg>
    )
  }
)
ChevronDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronDownCircle.displayName = 'ChevronDownCircle'
export default ChevronDownCircle
