import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Avatar = () => (
    <img
    src="https://www.gravatar.com/avatar/nothing"
    className="avatar"
    alt="avatar" />
);

const Author = () => (
    <span className="author">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
    </span>
)
const Time = () => (<span className="time">3h ago</span>)
const Message = () => (<div className="message">This is less than 140 characters.</div>)
const ReplyButton = () => (<i className="fa fa-reply reply-button"></i>)
const LikeButton = () => (<i className="fa fa-heart heart-button"></i>);
const RetweetButton = () => (<i className="fa fa-retweet retweet-button"></i>)
const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"></i>)


function Tweet(){
    return (
        <div className="tweet-container">
            <Avatar />
            <div className="content">
                <Author />
                <Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));