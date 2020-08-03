import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Printer = forwardRef(
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
        <g fill="none" transform="matrix(0 -1 1 0 2 19)" fillRule="evenodd">
          <path
            d="m3.5 4.38378906v-1.89752528c0-1.1045695.8954305-2 2-2h4c1.1045695 0 2 .8954305 2 2v12.01373622c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2v-2"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m1.5 4.5h5.0013251v8h-5.0013251c-.55228475 0-1-.4477153-1-1v-6c0-.55228475.44771525-1 1-1zm11.5 0h2.5c.5522847 0 1 .44771525 1 1v6c0 .5522847-.4477153 1-1 1h-2.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="9" cy="14" fill={color} r="1"></circle>
        </g>
      </svg>
    )
  }
)
Printer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Printer.displayName = 'Printer'
export default Printer
