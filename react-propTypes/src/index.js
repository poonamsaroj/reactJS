import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

// Props stands for Properties
/* 
    https://reactjs.org/docs/typechecking-with-proptypes.html
        PropTypes.array,
        PropTypes.bool,
        PropTypes.func,
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
        PropTypes.symbol,
*/

// Destructed data is passed in every child component for implementation
const Avatar = ({ hash }) => {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return <img src={url}
    className="avatar"
    alt="avatar" />
}

Avatar.propTypes = {
    hash: PropTypes.string
}

const Author = ({ author }) => {
    const { name, handle } = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
};

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string,
        handle: PropTypes.string
    })
}

const Time = ({ timestamp }) => (
        <span className="time">{moment(timestamp).fromNow()}</span>
) 


const Message = ({ text }) => (<div className="message"> {text} </div>);

const ReplyButton = () => (<i className="fa fa-reply reply-button"></i>);
const LikeButton = ({likes}) => (<i className="fa fa-heart heart-button"> {likes}</i>);
const RetweetButton = ({retweets}) => (<i className="fa fa-retweet retweet-button"> {retweets}</i>);
const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"></i>);

// Data of the user, eventually should come from database
const tweetData = {
    message: "We need a country of programmers",
    gravatar: "nothing",
    author: {
        handle: "Beliver",
        name: "D3v30"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};

// Destructured data feeding, props.tweet => {tweet}
// Appropriate data assigning is done to all the child functional components
function Tweet({tweet}){
    return (
        <div className="tweet-container">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author author={tweet.author}/>
                <Time timestamp={tweet.timestamp}/>
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton retweets={tweet.retweets}/>
                    <LikeButton likes={tweet.likes}/>
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

// Data is passed in render method to the component as key value pair
ReactDOM.render(<Tweet tweet={tweetData}/>, document.querySelector('#root'));