import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ChatAdd = forwardRef(
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
          transform="translate(2 3)"
        >
          <path d="m11.4182262 1.21376122c-.904128-.29938651-1.88845542-.46376122-2.9182262-.46376122-4.418278 0-8 3.02593755-8 6.75862069 0 1.45741942.54603279 2.80709561 1.47469581 3.91098161l-.97469581 4.5803977 3.91607376-2.4472652c1.07810761.4571647 2.29544433.7145066 3.58392624.7145066 4.418278 0 8-3.0259376 8-6.75862071 0-.68476204-.1205394-1.34573924-.3446699-1.96861327"></path>
          <path d="m14.5.5v4"></path>
          <path d="m14.5.5v4" transform="matrix(0 1 -1 0 17 -12)"></path>
        </g>
      </svg>
    )
  }
)
ChatAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChatAdd.displayName = 'ChatAdd'
export default ChatAdd
