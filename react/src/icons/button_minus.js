import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ButtonMinus = forwardRef(
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
          transform="matrix(0 1 -1 0 17 4)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m10.5.5h-8c-1.1045695 0-2 .8954305-2 2v8c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2z"></path>
          <path d="m6.5 3.5v6"></path>
        </g>
      </svg>
    )
  }
)
ButtonMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ButtonMinus.displayName = 'ButtonMinus'
export default ButtonMinus
