import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Disc = forwardRef(
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
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="8"></circle>
          <circle cx="10.5" cy="10.5" r="2.5"></circle>
        </g>
      </svg>
    )
  }
)
Disc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Disc.displayName = 'Disc'
export default Disc
