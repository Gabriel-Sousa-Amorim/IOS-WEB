import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd }) => {
    const onClick = () => {
        onAdd();
    };
    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
            <Button bgColor="green" text="Add" onClick={onClick} />
        </header>
    );
};

Header.defaultProps = {
    title: 'compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;