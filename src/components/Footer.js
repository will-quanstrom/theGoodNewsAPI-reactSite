import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';

const reactIcon = <FontAwesomeIcon icon={faReact} />;   


export default function Footer() {
    const footerReact = {
        display: 'inline-block',
        width: '100%',
        right: '1rem',
        bottom: '0',
        position: 'absolute'
    }
    return (
        <footer>
            <div style={footerReact}>
                <p>Copyright © 2020 by Will Quanstrom under the MIT license powered by {reactIcon}</p>
            </div>
        </footer>
    )
}