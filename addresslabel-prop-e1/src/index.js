import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const AddressLabel = ({person}) => {
    const {name, address1, address2} = person;
    console.log({person});
    return (
        <React.Fragment>
            <div className="address-label">
                <span>{name}</span>
                <span>{address1}</span>
                <span>{address2}</span>
            </div>
        </React.Fragment>
    );
}

AddressLabel.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address1: PropTypes.string.isRequired,
        address2: PropTypes.string.isRequired
    })
}

const AddressLabelData = {
    person: {
        name: 'Poonam Saroj',
        address1: '123 Fake St.',
        address2: 'Boston, MA 02118'
    }
}

ReactDOM.render(<AddressLabel person={AddressLabelData.person} />, document.querySelector('#root'));