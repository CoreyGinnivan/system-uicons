import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const WarningHex = forwardRef(
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
        <g fill="none" transform="translate(-1 -1)" fillRule="evenodd">
          <polygon
            stroke={color}
            points="11.301 2.953 17.795 5.722 20.042 11.285 17.295 17.788 11.716 20.042 5.208 17.279 2.96 11.716 5.723 5.207"
            transform="rotate(22 11.501 11.497)"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></polygon>
          <line
            x1="11.5"
            x2="11.5"
            y1="12.5"
            y2="7.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></line>
          <circle cx="11.5" cy="15.5" r="1" fill={color}></circle>
        </g>
      </svg>
    )
  }
)
WarningHex.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
WarningHex.displayName = 'WarningHex'
export default WarningHex
