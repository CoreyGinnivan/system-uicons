import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ComponentAdd = forwardRef(
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
          fill-rule="evenodd"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(3 2)"
        >
          <path
            d="m.5 9v3.5c0 1.1045695.8954305 2 2 2h7c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-3.5"
            transform="matrix(0 1 -1 0 15 3)"
          ></path>
          <path d="m11.5.5v6"></path>
          <path d="m11.5.5v6" transform="matrix(0 1 -1 0 15 -8)"></path>
        </g>
      </svg>
    )
  }
)
ComponentAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ComponentAdd.displayName = 'ComponentAdd'
export default ComponentAdd
