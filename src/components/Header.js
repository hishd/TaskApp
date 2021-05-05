import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log("Add Clicked!")
    }

    return(
        <header className="header">
            <h1>{props.title}</h1>
            <Button color='green' text='ADD' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header