import React from 'react'
import PropTypes from 'prop-types';
import { Button } from './Button';
const Header = ({ title }) => {
    const onClick = () => {
        console.log("hello")
    }
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

// const headingStyle = { color: 'red', backgroundColor: 'white' }
Header.defaultProps = {
    title: "Task tracker"
}
// strict types enforcement
Header.protoTypes = {
    title: PropTypes.string.isRequired
}
export default Header