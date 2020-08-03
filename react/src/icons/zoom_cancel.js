import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ZoomCancel = forwardRef(
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
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="5.5" cy="5.5" r="5"></circle>
          <path
            d="M8.32842712 5.5L2.67157288 5.5 8.32842712 5.5zM5.5 8.32842712L5.5 2.67157288 5.5 8.32842712z"
            transform="rotate(45 5.5 5.5)"
          ></path>
          <line x1="14.5" x2="9" y1="14.5" y2="9"></line>
        </g>
      </svg>
    )
  }
)
ZoomCancel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ZoomCancel.displayName = 'ZoomCancel'
export default ZoomCancel
