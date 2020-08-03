import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const MicrophoneMuted = forwardRef(
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
          transform="translate(5 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8.5 6 .00115967 1.5c-.21419271 2-1.21535238 3-3.00115967 3s-2.78464762-1-2.99884033-3l-.00115967-3.5c0-2 1.85706111-3.2309912 2.5-3.5"></path>
          <g transform="translate(6)">
            <path d="m.5 4.5 4-4"></path>
            <path d="m4.5 4.5-4-4z"></path>
          </g>
          <path d="m10.5 7.5c0 2.7614237-2.23857625 5-5 5s-5-2.2385763-5-5"></path>
          <path d="m5.522 12.5v4"></path>
        </g>
      </svg>
    )
  }
)
MicrophoneMuted.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
MicrophoneMuted.displayName = 'MicrophoneMuted'
export default MicrophoneMuted
