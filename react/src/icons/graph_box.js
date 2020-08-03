import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const GraphBox = forwardRef(
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
          transform="translate(3 3)"
        >
          <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m4.5 11.435v-7.935"></path>
          <path d="m7.5 11.485v-3.985"></path>
          <path d="m10.5 11.5v-6"></path>
        </g>
      </svg>
    )
  }
)
GraphBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
GraphBox.displayName = 'GraphBox'
export default GraphBox
