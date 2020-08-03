import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const UserCircle = forwardRef(
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
          stroke-linejoin="round"
          transform="translate(2 2)"
        >
          <circle cx="8.5" cy="8.5" r="8" stroke-linecap="round"></circle>
          <path
            d="m9.5 4.5 2 2c0 1.65685425-1.3431458 3-3 3-1.65685425 0-3-1.34314575-3-3z"
            stroke-linecap="round"
          ></path>
          <path d="m3.5 12v-4.5c0-2.76142375 2.23857625-5 5-5 2.7614237 0 5 2.23857625 5 5v4.5"></path>
          <path
            d="m14.5 13.4041808c-.6615287-2.2735218-3.1995581-2.9293071-6-2.9293071-2.72749327 0-5.27073171.77299-6 2.9293071"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
    )
  }
)
UserCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
UserCircle.displayName = 'UserCircle'
export default UserCircle
