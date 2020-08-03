import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const FaceHappy = forwardRef(
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
          <circle
            cx="8.5"
            cy="8.5"
            r="8"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
          <circle cx="6" cy="6" fill="#2a2e3b" r="1"></circle>
          <circle cx="11" cy="6" fill="#2a2e3b" r="1"></circle>
          <path
            d="m5 10c.93619792 1 2.10286458 1.5 3.5 1.5s2.5638021-.5 3.5-1.5"
            stroke="#2a2e3b"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    )
  }
)
FaceHappy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
FaceHappy.displayName = 'FaceHappy'
export default FaceHappy
