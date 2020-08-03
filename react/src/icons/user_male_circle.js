import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const UserMaleCircle = forwardRef(
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
          transform="translate(2 2)"
        >
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <path d="m14.5 13.5c-.6615287-2.2735217-3.1995581-3.0251263-6-3.0251263-2.72749327 0-5.27073171.8688092-6 3.0251263m6-11c1.6568542 0 3 1.34314575 3 3v1c0 1.65685425-1.3431458 3-3 3-1.65685425 0-3-1.34314575-3-3v-1c0-1.65685425 1.34314575-3 3-3z"></path>
        </g>
      </svg>
    )
  }
)
UserMaleCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
UserMaleCircle.displayName = 'UserMaleCircle'
export default UserMaleCircle
