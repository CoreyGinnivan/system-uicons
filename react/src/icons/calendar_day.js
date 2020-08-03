import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CalendarDay = forwardRef(
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
        <g fill="none" transform="translate(2 2)" fillRule="evenodd">
          <path
            d="m2.5.5h12.0269119c1.1045695 0 2 .8954305 2 2v11.9907459c0 1.1045695-.8954305 2-2 2-.0031997 0-.0063994-.0000077-.0095991-.000023l-12.02691193-.0577246c-1.10080997-.0052835-1.99040087-.8991544-1.99040087-1.999977v-11.9330213c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m.5 4.5h16.027"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="4.5" cy="8.5" fill={color} r="1"></circle>
        </g>
      </svg>
    )
  }
)
CalendarDay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CalendarDay.displayName = 'CalendarDay'
export default CalendarDay
