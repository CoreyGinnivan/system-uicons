import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Star = forwardRef(
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
        <path
          d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
          fill="none"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(3 3)"
        ></path>
      </svg>
    )
  }
)
Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Star.displayName = 'Star'
export default Star
