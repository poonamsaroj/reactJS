import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { blue } from '@material-ui/core/colors';
import './index.css';

/*  Create a CreditCard component based on this design. Style it up with CSS or inline styles.
    Accept a cardInfo prop that contains the person’s name, expiration date, credit card number,
    and bank name.
*/

const useStyles = makeStyles(theme => ({
    card: {
        width: 700,
        minWidth: 275,
        backgroundColor: blue[900]
    },
    title: {
        fontSize: 24
    },
    pos: {
        marginBottom: 12,
    }
}));

const CreditCard = ({cardInfo}) => {
    const classes = useStyles();
    const {personName, expirationDate, cardNumber, bankName} = cardInfo;
    return (
        <Card className={classes.card}>
            <CardContent className="card">
                <Typography className={classes.title}>
                    {bankName}
                </Typography>
                <Typography className={classes.title}>
                    {cardNumber}
                </Typography>
                <Typography className={classes.title}>
                    {cardNumber.substring(0, 4)}
                </Typography>
                <Typography className={classes.title}>
                    {moment(expirationDate).format('MM/YYYY')}
                </Typography>
                <Typography className={classes.title}>
                    {personName}
                </Typography>
            </CardContent>
        </Card>
    )
}

CreditCard.propTypes = {
    personName: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    cardNumber: PropTypes.number.isRequired,
    bankName: PropTypes.string.isRequired,
}

const cardInfo = {
    personName: 'Poonam Saroj',
    expirationDate: "2016-07-30 21:24:37",
    cardNumber: '1234567887654321',
    bankName: 'Big Bank, Inc.'
}

ReactDOM.render(<CreditCard cardInfo={cardInfo} />, document.querySelector('#root'));