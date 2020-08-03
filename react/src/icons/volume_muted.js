import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const VolumeMuted = forwardRef(
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
          transform="translate(3 2)"
        >
          <path d="m1 5.5h2.5l5-5v16l-5-5h-2.5c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"></path>
          <g transform="translate(10.328 5.657)">
            <path d="m.172 4.843 4-4"></path>
            <path d="m4.17157288 4.84314575-4-4z"></path>
          </g>
        </g>
      </svg>
    )
  }
)
VolumeMuted.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
VolumeMuted.displayName = 'VolumeMuted'
export default VolumeMuted
