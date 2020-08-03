import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const List = forwardRef(
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
        <g fill="none" transform="translate(4 5)" fillRule="evenodd">
          <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
            <path d="m11.5 5.5h-7"></path>
            <path d="m11.5 9.5h-7"></path>
            <path d="m11.5 1.5h-7"></path>
          </g>
          <path
            d="m1.49884033 2.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z"
            fill={color}
          ></path>
        </g>
      </svg>
    )
  }
)
List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
List.displayName = 'List'
export default List
