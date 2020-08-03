import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Database = forwardRef(
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
          <path d="m.5 3.20588235c0-1.29949353 2.5-2.74110534 6-2.70588235s6 1.55344765 6 2.85294118v10.29411762c0 1.2994936-2.5 2.8529412-6 2.8529412s-6-1.7005065-6-3c0-.6412832 0-9.65283449 0-10.29411765z"></path>
          <path d="m.5 3.5c0 1.38071187 2 3 6 3s6-1.63689962 6-3.0176115m-12 5.0176115c0 1.38071187 2 3 6 3s6-1.63689962 6-3.0176115"></path>
        </g>
      </svg>
    )
  }
)
Database.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Database.displayName = 'Database'
export default Database
