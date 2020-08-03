import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const FaceSad = forwardRef(
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
        <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
          <path
            d="m8.5 16.5c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <circle cx="6" cy="6" fill="#2a2e3b" r="1"></circle>
          <circle cx="11" cy="6" fill="#2a2e3b" r="1"></circle>
          <path
            d="m5 10c.93619792 1 2.10286458 1.5 3.5 1.5s2.5638021-.5 3.5-1.5"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="matrix(1 0 0 -1 0 21.5)"
          ></path>
        </g>
      </svg>
    )
  }
)
FaceSad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
FaceSad.displayName = 'FaceSad'
export default FaceSad
