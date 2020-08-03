import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ChevronUpDouble = forwardRef(
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
          fill-rule="evenodd"
          stroke="#2A2E3B"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(6 6)"
        >
          <polyline
            points="7.328 5.672 7.328 11.328 1.672 11.328"
            transform="rotate(-135 4.5 8.5)"
          ></polyline>
          <polyline
            points="7.328 1.672 7.328 7.328 1.672 7.328"
            transform="rotate(-135 4.5 4.5)"
          ></polyline>
        </g>
      </svg>
    )
  }
)
ChevronUpDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronUpDouble.displayName = 'ChevronUpDouble'
export default ChevronUpDouble
