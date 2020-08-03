import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Ticket = forwardRef(
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
          transform="translate(4 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 .5c0 1.1045695.8954305 2 2 2s2-.8954305 2-2l-.001-.01471863h2.501c.5522847 0 1 .44771525 1 1v13.01471863c0 .5522847-.4477153 1-1 1h-2.5c0-1.1045695-.8954305-2-2-2s-2 .8954305-2 2h-2.5c-.55228475 0-1-.4477153-1-1v-13.01471863c0-.55228475.44771525-1 1-1l2.50004961.00048215c-.00003306.00474159-.00004961.0094871-.00004961.01423648z"></path>
          <path d="m3 4.5h2"></path>
          <path d="m7 4.5h2"></path>
          <path d="m3 11.5h2"></path>
          <path d="m7 11.5h2"></path>
        </g>
      </svg>
    )
  }
)
Ticket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Ticket.displayName = 'Ticket'
export default Ticket
