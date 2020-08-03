import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const VolumeMinus = forwardRef(
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
          transform="translate(3 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m1 5.5h2l5.5-5v15.5l-5.5-4.5h-2c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"></path>
          <path
            d="m.596 3.182 2.829-2.828"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 12.328562 5.828218)"
          ></path>
        </g>
      </svg>
    )
  }
)
VolumeMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
VolumeMinus.displayName = 'VolumeMinus'
export default VolumeMinus
