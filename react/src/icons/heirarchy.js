import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Heirarchy = forwardRef(
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
          <path d="m5.5.5h6v5h-6z"></path>
          <path d="m10.5 11.5h6v5h-6z"></path>
          <path d="m.5 11.5h6v5h-6z"></path>
          <path d="m3.498 11.5v-3h10v3"></path>
          <path d="m8.5 8.5v-3"></path>
        </g>
      </svg>
    )
  }
)
Heirarchy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Heirarchy.displayName = 'Heirarchy'
export default Heirarchy
