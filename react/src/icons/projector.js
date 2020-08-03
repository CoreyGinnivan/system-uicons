import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Projector = forwardRef(
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
          transform="translate(1 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m14.0073593.99264069h-10.01471861v14.00000001h10.01471861c.5522848 0 1-.4477153 1-1v-12.00000001c0-.55228475-.4477152-1-1-1z"
            transform="matrix(0 1 -1 0 17.493 -1.507)"
          ></path>
          <path d="m7.5 13.5-2 3.5"></path>
          <path d="m13.5 13.5-2 3" transform="matrix(-1 0 0 1 25 0)"></path>
          <path d="m.5 2.5h18"></path>
          <path d="m9.49999972.49894714h.00000056c1.10415762.0016344 1.99894662.8968945 1.99999972 2.00105286v.00000028l-4-.00210599c-.00105258-1.1045695.89437792-2 1.99894742-2 .00035095 0 .0007019.00000009.0010523.00105285z"></path>
        </g>
      </svg>
    )
  }
)
Projector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Projector.displayName = 'Projector'
export default Projector
