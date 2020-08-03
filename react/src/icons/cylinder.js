import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Cylinder = forwardRef(
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
          transform="translate(5 2)"
        >
          <path d="m.5 3.35294118c0-1.29949353 2-2.85294118 5-2.85294118s5 1.55344765 5 2.85294118v10.29411762c0 1.2994936-2 2.8529412-5 2.8529412s-5-1.5534476-5-2.8529412c0-.6412831 0-9.65283447 0-10.29411762z"></path>
          <path d="m.5 3.5c0 1.38071187 2 3 5 3s5-1.61928813 5-3"></path>
        </g>
      </svg>
    )
  }
)
Cylinder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Cylinder.displayName = 'Cylinder'
export default Cylinder
