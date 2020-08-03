import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Thread = forwardRef(
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
          transform="translate(1 1)"
        >
          <path
            d="m15.5 4.5c1.6568542 0 3 1.34314575 3 3v5c0 1.6568542-1.3431458 3-3 3l-2.468-.001-1.7152977 2.4298518c-.1639804.2320786-.4176379.3818336-.6960544.4156462l-.1206479.0072945c-.55228475 0-1-.4477152-1-1l-.001-1.8527925-.999.001c-1.65685425 0-3-1.3431458-3-3v-5c0-1.65685425 1.34314575-3 3-3z"
            transform="matrix(-1 0 0 1 24 0)"
          ></path>
          <path d="m5.5 12.5-2 2v-4h-.90625561c-1.09544195 0-1.98704628-.88123276-1.9998631-1.97659973l-.07020561-6c-.01292361-1.10449389.87196894-2.01033976 1.97646283-2.02326337.00779976-.00009127.01559998-.0001369.02340027-.0001369h8.97646122c1.1045695 0 2 .8954305 2 2v2"></path>
        </g>
      </svg>
    )
  }
)
Thread.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Thread.displayName = 'Thread'
export default Thread
