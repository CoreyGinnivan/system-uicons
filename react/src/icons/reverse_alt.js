import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ReverseAlt = forwardRef(
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
          transform="matrix(0 -1 1 0 3 18)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m13.328 5.672v5.656h-5.656"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 11.914749 -4.935251)"
          ></path>
          <path d="m10.5.5v12"></path>
          <path
            d="m7.328 3.672h-5.656v5.656"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 3.085814 -1.278186)"
          ></path>
          <path d="m4.5 2.5v12"></path>
        </g>
      </svg>
    )
  }
)
ReverseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ReverseAlt.displayName = 'ReverseAlt'
export default ReverseAlt
