import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ArrowLeft = forwardRef(
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
          transform="translate(3 6)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="1.67 1.669 7.327 1.671 7.328 7.328"
            transform="scale(-1 1) rotate(45 0 -6.364)"
          ></polyline>
          <line x1="13.5" x2=".5" y1="4.5" y2="4.5"></line>
        </g>
      </svg>
    )
  }
)
ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ArrowLeft.displayName = 'ArrowLeft'
export default ArrowLeft
