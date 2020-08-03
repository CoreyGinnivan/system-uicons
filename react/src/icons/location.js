import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Location = forwardRef(
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
          transform="translate(4 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6.5 16.5407715c4-4.4500928 6-7.78586659 6-10.00732153 0-3.33218241-2.6862915-6.03344997-6-6.03344997s-6 2.70126756-6 6.03344997c0 2.22145494 2 5.55722873 6 10.00732153z"></path>
          <circle cx="6.5" cy="6.5" r="2.5"></circle>
        </g>
      </svg>
    )
  }
)
Location.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Location.displayName = 'Location'
export default Location
