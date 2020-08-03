import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const SideMenu = forwardRef(
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
        <g fill="none" fill-rule="evenodd" transform="translate(3 5)">
          <g stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round">
            <path d="m4.5 1.5h8"></path>
            <path d="m4.5 5.498h5"></path>
            <path d="m4.5 9.5h8"></path>
          </g>
          <path
            d="m1.49884033 2.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z"
            fill="#2a2e3b"
          ></path>
        </g>
      </svg>
    )
  }
)
SideMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
SideMenu.displayName = 'SideMenu'
export default SideMenu
