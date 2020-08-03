import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Create = forwardRef(
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
          transform="translate(3 2)"
        >
          <path d="m7 2.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"></path>
          <path
            d="m9.49086518-.60570641c.79784342.01307433 1.43777452.66357797 1.43777452 1.46152846v9.87574095l-1.41421359 2.8284271-1.41421356-2.8284271-.04115759-9.92287518c-.00322702-.77801908.62486604-1.41134419 1.40288513-1.41457122.00964205-.00003999.01928425.00001901.02892509.00017699z"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 7.360659 -4.816202)"
          ></path>
          <path d="m12.5 3.5.953 1"></path>
        </g>
      </svg>
    )
  }
)
Create.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Create.displayName = 'Create'
export default Create
