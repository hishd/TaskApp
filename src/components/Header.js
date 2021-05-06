import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log("Add Clicked!")
    }

    return(
        <header className="header">
            <h1>{props.title}</h1>
            <Button color='green' text={props.showAdd ? 'Hide' : 'Add'} color={props.showAdd ? 'red' : 'green'} onClick={props.onAdd} />
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