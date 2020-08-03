import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const MailOpen = forwardRef(
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
          transform="matrix(0 -1 1 0 3 17)"
        >
          <path d="m2.5.5h7.26393202c.75754408 0 1.45007038.42800475 1.78885438 1.10557281l2.5 5c.2815275.56305498.2815275 1.2257994 0 1.78885438l-2.5 5.00000001c-.338784.677568-1.0313103 1.1055728-1.78885438 1.1055728h-7.26393202c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"></path>
          <path
            d="m3 6 5.019 3 4.981-3"
            transform="matrix(0 1 -1 0 15.5 -.5)"
          ></path>
        </g>
      </svg>
    )
  }
)
MailOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
MailOpen.displayName = 'MailOpen'
export default MailOpen
