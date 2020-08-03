import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Undo = forwardRef(
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
          transform="matrix(-1 0 0 1 19 7)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m16.255 1.245v5.5l-5 .01"
            transform="matrix(0 1 1 0 9.755 -9.755)"
          ></path>
          <path d="m16.5 6.5c-3.1700033-4-6.1700033-6-9-6-2.82999674 0-5.16333008 1-7 3"></path>
        </g>
      </svg>
    )
  }
)
Undo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Undo.displayName = 'Undo'
export default Undo
