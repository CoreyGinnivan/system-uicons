import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Expand = forwardRef(
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
          transform="translate(2 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="16.5 .522 16.5 5.5 11 5.487"
            transform="matrix(1 0 0 -1 0 6.022)"
          ></polyline>
          <line
            x1="13.533"
            x2="13.467"
            y1="-.734"
            y2="7.685"
            transform="rotate(45 13.5 3.476)"
          ></line>
          <polyline
            points="6 11.507 .5 11.5 .5 16.523"
            transform="matrix(1 0 0 -1 0 28.023)"
          ></polyline>
          <line
            x1="3.5"
            x2="3.5"
            y1="9.257"
            y2="17.743"
            transform="rotate(45 3.5 13.5)"
          ></line>
        </g>
      </svg>
    )
  }
)
Expand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Expand.displayName = 'Expand'
export default Expand
