import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const DownloadAlt = forwardRef(
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
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m10.334 5.685-5.641-.016-.016 5.673"
            transform="matrix(.70710678 -.70710678 -.70710678 -.70710678 8.212726 19.827274)"
          ></path>
          <path d="m7.522.521v11.979"></path>
          <path d="m.5 9v4.5c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5"></path>
        </g>
      </svg>
    )
  }
)
DownloadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
DownloadAlt.displayName = 'DownloadAlt'
export default DownloadAlt
