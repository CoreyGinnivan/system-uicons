import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const PhonePortrait = forwardRef(
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
          <rect height="14" rx="2" width="10" x="5.5" y="3.5"></rect>
          <path d="m8.5 15.5h4"></path>
        </g>
      </svg>
    )
  }
)
PhonePortrait.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
PhonePortrait.displayName = 'PhonePortrait'
export default PhonePortrait
