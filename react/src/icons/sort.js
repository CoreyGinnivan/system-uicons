import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Sort = forwardRef(
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
          transform="translate(2 4)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="7.327 1.669 7.327 7.326 1.673 7.328"
            transform="scale(1 -1) rotate(45 15.36 0)"
          ></polyline>
          <line x1="4.5" x2="4.5" y1=".5" y2="12.5"></line>
          <g transform="translate(8)">
            <polyline
              points="7.291 5.687 7.366 11.419 1.634 11.344"
              transform="scale(-1 1) rotate(45 0 -2.31)"
            ></polyline>
            <line x1="4.5" x2="4.5" y1=".5" y2="12.5"></line>
          </g>
        </g>
      </svg>
    )
  }
)
Sort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Sort.displayName = 'Sort'
export default Sort
