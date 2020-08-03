import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const QuestionCircle = forwardRef(
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
        <g fill="none" transform="translate(2 2)" fillRule="evenodd">
          <circle
            cx="8.5"
            cy="8.5"
            r="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <path
            d="m8.5 9.5v-1l1.41421356-1.41421356c.37507274-.37507276.58578644-.88378059.58578644-1.41421356v-.17157288c0-.61286606-.3462631-1.17313156-.89442719-1.4472136l-.21114562-.1055728c-.56305498-.2815275-1.2257994-.2815275-1.78885438 0l-.10557281.0527864c-.61286606.30643303-1 .9328289-1 1.61803399v.88196601"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="8.5" cy="12.5" fill={color} r="1"></circle>
        </g>
      </svg>
    )
  }
)
QuestionCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
QuestionCircle.displayName = 'QuestionCircle'
export default QuestionCircle
