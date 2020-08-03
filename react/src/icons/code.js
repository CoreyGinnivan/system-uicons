import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Code = forwardRef(
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
          <line x1="10.5" x2="6.5" y1=".5" y2="14.5"></line>
          <polyline
            points="7.328 2.672 7.328 8.328 1.672 8.328"
            transform="rotate(135 4.5 5.5)"
          ></polyline>
          <polyline
            points="15.328 6.672 15.328 12.328 9.672 12.328"
            transform="scale(1 -1) rotate(-45 -10.435 0)"
          ></polyline>
        </g>
      </svg>
    )
  }
)
Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Code.displayName = 'Code'
export default Code
