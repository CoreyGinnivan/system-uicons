import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ButtonAdd = forwardRef(
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
          transform="translate(4 4)"
        >
          <path
            d="m10.5.5h-8c-1.1045695 0-2 .8954305-2 2v8c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2z"
            transform="matrix(0 1 -1 0 13 0)"
          ></path>
          <path d="m6.5 3.5v6.056"></path>
          <path d="m6.5 3.5v6" transform="matrix(0 1 -1 0 13 0)"></path>
        </g>
      </svg>
    )
  }
)
ButtonAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ButtonAdd.displayName = 'ButtonAdd'
export default ButtonAdd
