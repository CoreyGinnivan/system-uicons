import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Server = forwardRef(
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
        <g fill="none" transform="matrix(0 -1 1 0 1.5 18.5)" fillRule="evenodd">
          <path
            d="m2.5.5h3c1.1045695 0 2 .8954305 2 2v13c0 1.1045695-.8954305 2-2 2h-3c-1.1045695 0-2-.8954305-2-2v-13c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="4" cy="4" fill={color} r="1"></circle>
          <path
            d="m9.50624332.5000411 2.99999998.00936502c1.1021268.00344048 1.9937567.89785814 1.9937567 1.99999026v12.99057222c0 1.1045695-.8954305 2-2 2-.0020811 0-.0041622-.0000032-.0062433-.0000097l-3.00000002-.009365c-1.10212675-.0034405-1.99375668-.8978582-1.99375668-1.9999903v-12.99057225c0-1.1045695.8954305-2 2-2 .00208111 0 .00416222.00000325.00624332.00000975z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="11" cy="4" fill={color} r="1"></circle>
        </g>
      </svg>
    )
  }
)
Server.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Server.displayName = 'Server'
export default Server
