import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CalendarWeek = forwardRef(
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
          transform="translate(2 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m.5 4.5h16"></path>
          <path d="m3.5 7.5v6"></path>
          <path d="m5.5 7.5v6"></path>
          <path d="m7.5 7.5v6"></path>
          <path d="m9.5 7.5v6"></path>
          <path d="m11.5 7.5v6"></path>
          <path d="m13.5 7.5v6"></path>
        </g>
      </svg>
    )
  }
)
CalendarWeek.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CalendarWeek.displayName = 'CalendarWeek'
export default CalendarWeek
