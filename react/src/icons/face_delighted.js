import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const FaceDelighted = forwardRef(
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
        <g fill="none" transform="translate(2 2)" fillRule="evenodd">
          <circle
            cx="8.5"
            cy="8.5"
            r="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <circle cx="6" cy="6" fill="currentColor" r="1"></circle>
          <circle cx="11" cy="6" fill="currentColor" r="1"></circle>
          <path
            d="m5 10c.33294678 2.3333333 1.49961344 3.5 3.5 3.5 2.0003866 0 3.1670532-1.1666667 3.5-3.5z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    )
  }
)
FaceDelighted.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
FaceDelighted.displayName = 'FaceDelighted'
export default FaceDelighted
