import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Document = forwardRef(
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
          transform="translate(4 3)"
        >
          <path d="m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"></path>
          <path d="m2.5 7.5h5"></path>
          <path d="m2.5 9.5h7"></path>
          <path d="m2.5 11.5h3"></path>
          <path d="m7.5.5v3c0 1.1045695.8954305 2 2 2h3"></path>
        </g>
      </svg>
    )
  }
)
Document.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Document.displayName = 'Document'
export default Document
