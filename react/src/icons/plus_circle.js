import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const PlusCircle = forwardRef(
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
          transform="translate(2 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 16c4.4380025 0 8-3.5262833 8-7.96428571 0-4.43800246-3.5619975-8.03571429-8-8.03571429-4.43800245 0-8 3.59771183-8 8.03571429 0 4.43800241 3.56199755 7.96428571 8 7.96428571z"></path>
          <path d="m4 8h8"></path>
          <path d="m8 12.0563492v-8.0563492z"></path>
        </g>
      </svg>
    )
  }
)
PlusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
PlusCircle.displayName = 'PlusCircle'
export default PlusCircle
