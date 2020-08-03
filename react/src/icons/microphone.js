import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Microphone = forwardRef(
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
          transform="translate(5 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5.38916302.61501045.11083698-.00409775c1.5967308-.05903257 2.93899223 1.18751813 2.9980248 2.78424894.00131669.0356141.0019752.07124949.0019752.10688793v3.99795043c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-3.88703773c0-1.61372368 1.27654106-2.93833174 2.88916302-2.99795182z"></path>
          <path d="m10.5 7.5c0 2.7614237-2.23857625 5-5 5s-5-2.2385763-5-5"></path>
          <path d="m5.5 12.5v4"></path>
        </g>
      </svg>
    )
  }
)
Microphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Microphone.displayName = 'Microphone'
export default Microphone
