import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const MicrophoneDisabled = forwardRef(
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
          transform="translate(4 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3.69580617 2.54493618c.41696847-1.09403231 1.45627406-1.88418967 2.69335685-1.92992573l.11083698-.00409775c1.5967308-.05903257 2.93899223 1.18751813 2.9980248 2.78424894.00131669.0356141.0019752.07124949.0019752.10688793v3.99795043c0 .38785203-.0736015.75851351-.2075993 1.09877923m-1.33573209 1.52446147c-.4313298.2400274-.92803148.3767593-1.45666861.3767593-1.65685425 0-3-1.34314575-3-3 0-.93326823 0-1.53336589 0-2"></path>
          <path d="m11.5 7.5c0 .91813853-.2474698 1.7784774-.6793465 2.5179537m-1.4246464 1.5584561c-.81714521.5815728-1.81663493.9235902-2.8960071.9235902-2.76142375 0-5-2.2385763-5-5"></path>
          <path d="m0 2 13 13.071"></path>
          <path d="m6.5 12.5v4"></path>
        </g>
      </svg>
    )
  }
)
MicrophoneDisabled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
MicrophoneDisabled.displayName = 'MicrophoneDisabled'
export default MicrophoneDisabled
