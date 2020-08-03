import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const MailMinus = forwardRef(
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
          transform="matrix(0 -1 1 0 2 17)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 14.5h-6.5c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2h7c1.1045695 0 2 .8954305 2 2v7.5"></path>
          <path d="m11.5 12.5v4"></path>
          <path d="m2 6 5 3 5-3" transform="matrix(0 1 -1 0 14.5 .5)"></path>
        </g>
      </svg>
    )
  }
)
MailMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
MailMinus.displayName = 'MailMinus'
export default MailMinus
