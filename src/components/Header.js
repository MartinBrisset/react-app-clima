import PropTypes from 'prop-types'
import React from 'react';

const Header = ({titulo}) => {
    return ( 
       
        <nav>
            <div className='nav-wrapper light-blue darken-2'>
                <a href='#!' className='brand-logo'>{titulo}</a>
            </div>
        </nav>

    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}

export default Header;