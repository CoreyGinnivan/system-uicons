import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CalendarDays = forwardRef(
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
            d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m.5 4.5h16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <g fill="currentColor">
            <g>
              <circle cx="8.5" cy="8.5" r="1"></circle>
              <circle cx="4.5" cy="8.5" r="1"></circle>
            </g>
            <circle cx="4.5" cy="12.5" r="1"></circle>
          </g>
        </g>
      </svg>
    )
  }
)
CalendarDays.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CalendarDays.displayName = 'CalendarDays'
export default CalendarDays
