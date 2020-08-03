import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const FilterCircle = forwardRef(
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
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="8"></circle>
          <path d="m6.5 8.5h8"></path>
          <path d="m8.5 10.5h4"></path>
          <path d="m9.5 12.5h2"></path>
        </g>
      </svg>
    )
  }
)
FilterCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
FilterCircle.displayName = 'FilterCircle'
export default FilterCircle
