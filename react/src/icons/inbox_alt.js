import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const InboxAlt = forwardRef(
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
          transform="translate(2.5 1.5)"
        >
          <path d="m10 3h2.3406038c.4000282 0 .7615663.23839685.9191451.6060807l2.7402511 6.3939193v4c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-4l2.74025113-6.3939193c.15757879-.36768385.51911692-.6060807.91914503-.6060807h2.34060384"></path>
          <path
            d="m10.121 3.964-.06 4.182-4.182.061"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 6.646598 -3.874306)"
          ></path>
          <path d="m8 0v9"></path>
          <path d="m0 10h4c.55228475 0 1 .4477153 1 1v1c0 .5522847.44771525 1 1 1h4c.5522847 0 1-.4477153 1-1v-1c0-.5522847.4477153-1 1-1h4"></path>
        </g>
      </svg>
    )
  }
)
InboxAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
InboxAlt.displayName = 'InboxAlt'
export default InboxAlt
