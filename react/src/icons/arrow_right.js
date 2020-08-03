import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ArrowRight = forwardRef(
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
          transform="translate(4 6)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="12.329 7.328 12.328 1.67 6.671 1.669"
            transform="scale(1 -1) rotate(45 20.36 0)"
          ></polyline>
          <line x1="13.5" x2=".5" y1="4.5" y2="4.5"></line>
        </g>
      </svg>
    )
  }
)
ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ArrowRight.displayName = 'ArrowRight'
export default ArrowRight
