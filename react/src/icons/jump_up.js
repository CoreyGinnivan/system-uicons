import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const JumpUp = forwardRef(
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
        <path
          fill="none"
          stroke={color}
          d="M2.78986654,5.08887706 C6.19482344,1.23745226 9.76486792,-0.189609328 13.5,0.807692308 C9.78871252,1.7986273 7.21833071,4.22566732 5.78885455,8.08881237 L8.5,10.8 L0.5,10.8 L0.5,2.8 Z"
          transform="rotate(-180 8.5 7.65)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
JumpUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
JumpUp.displayName = 'JumpUp'
export default JumpUp
