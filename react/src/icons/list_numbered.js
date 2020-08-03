import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ListNumbered = forwardRef(
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
        <g fill="none" transform="translate(4 4)" fillRule="evenodd">
          <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
            <path d="m11.5 6.5h-7"></path>
            <path d="m11.5 10.5h-7"></path>
            <path d="m11.5 2.5h-7"></path>
          </g>
          <path
            d="m1.88 4v-2.172h-.037l-.68.459v-.617l.717-.488h.717v2.818z"
            fill={color}
          ></path>
          <path
            d="m.89941406 6.06835938c0-.57226563.45117188-.96289063 1.109375-.96289063.65234375 0 1.04101563.35351563 1.04101563.8359375 0 .33398437-.1484375.5546875-.59765625.9609375l-.5546875.50195313v.03710937h1.18554687v.55859375h-2.14257812v-.47851562l1.0078125-.91210938c.34765625-.31835938.40625-.43945312.40625-.60546875 0-.1953125-.13671875-.35742187-.3828125-.35742187-.26171875 0-.41601563.17773437-.41601563.421875zm.71289063 4.73046872v-.484375h.36132812c.23828125 0 .39257813-.1386719.39257813-.34179685 0-.19140625-.14648438-.33203125-.38867188-.33203125-.25390625 0-.40820312.13476562-.41992187.3632812h-.65234375c.00976562-.54101558.4375-.89843745 1.10742187-.89843745.66015625 0 1.02148438.34570313 1.01953125.765625 0 .33984375-.21875.56445315-.52734375.63671875v.0371094c.40625.0566406.640625.3085937.640625.6796875 0 .5039062-.48046875.8515625-1.15820312.8515625-.66992188 0-1.125-.3613281-1.15039063-.9160157h.68359375c.00976563.2167969.18554688.3515626.45703125.3515626.26171875 0 .43945313-.1425782.43945313-.3554688 0-.2226562-.16796875-.3574219-.44335938-.3574219z"
            fill={color}
          ></path>
        </g>
      </svg>
    )
  }
)
ListNumbered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ListNumbered.displayName = 'ListNumbered'
export default ListNumbered
