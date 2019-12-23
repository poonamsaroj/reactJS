import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const AddressLabel = ({person}) => {
    // console.log({person});
    return (
            <Envelope person={person}/>
    );
}
    
const Envelope = ({person}) => {
    // console.log({person});
    const {toPerson, fromPerson} = person;
    return (
        <div className="address-label">
            <div className="to-person">
                <span>{toPerson.name}</span>
                <span>{toPerson.address1}</span>
                <span>{toPerson.address2}</span>
            </div> 
            <div className="from-person">
                <span>{fromPerson.name}</span>
                <span>{fromPerson.address1}</span>
                <span>{fromPerson.address2}</span>
            </div> 
        </div>
    )
}

Envelope.propTypes = {
    toPerson: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address1: PropTypes.string.isRequired,
        address2: PropTypes.string.isRequired
    }),
    fromPerson: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address1: PropTypes.string.isRequired,
        address2: PropTypes.string.isRequired
    })
}

const AddressLabelData = {
    toPerson: {
        name: 'Poonam Saroj',
        address1: '123 Fake St.',
        address2: 'Boston, MA 02118'
    },
    fromPerson: {
        name: 'Poonam Saroj',
        address1: '123 Fake St.',
        address2: 'Boston, MA 02118'
    }
}

ReactDOM.render(<AddressLabel person={AddressLabelData} />, document.querySelector('#root'));