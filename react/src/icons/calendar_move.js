import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const CalendarMove = forwardRef(
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
          transform="translate(1 2)"
        >
          <path d="m1.5 8.46153846v-6.02882304c0-1.1045695.8954305-2 2-2 .00320511 0 .00641021.00000771.00961527.00002312l12.00000003.0576923c1.1008036.00529233 1.9903847.89916054 1.9903847 1.99997689v11.99995377c0 1.1045695-.8954305 2-2 2-.0032051 0-.0064102-.0000077-.0096153-.0000231l-11.99999997-.0576923c-1.10080364-.0052923-1.99038473-.8991606-1.99038473-1.9999769v-1.9326692"></path>
          <path d="m1.5 4.5h16"></path>
          <path
            d="m9.621 8.379v4.242h-4.242"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 -5.228144 12.621856)"
          ></path>
          <path d="m5 6v9" transform="matrix(0 1 -1 0 15.5 5.5)"></path>
        </g>
      </svg>
    )
  }
)
CalendarMove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CalendarMove.displayName = 'CalendarMove'
export default CalendarMove
