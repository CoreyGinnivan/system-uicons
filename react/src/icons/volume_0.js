import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Volume0 = forwardRef(
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
          d="m1.5 4.5h3l5-4v14.1862915l-5-4.1862915h-3c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"
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
Volume0.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Volume0.displayName = 'Volume0'
export default Volume0
