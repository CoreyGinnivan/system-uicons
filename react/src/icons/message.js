import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Message = forwardRef(
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
        <g fill="none" transform="translate(2 3)" fillRule="evenodd">
          <path
            d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m13.5 5.5h-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m4.49884033 6.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z"
            fill="currentColor"
          ></path>
          <path
            d="m13.5 9.5h-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    )
  }
)
Message.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Message.displayName = 'Message'
export default Message
