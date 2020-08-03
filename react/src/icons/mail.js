import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Mail = forwardRef(
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
          transform="matrix(0 -1 1 0 2.5 16.5)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 .5h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m2 6 5 3 5-3" transform="matrix(0 1 -1 0 14.5 .5)"></path>
        </g>
      </svg>
    )
  }
)
Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Mail.displayName = 'Mail'
export default Mail
