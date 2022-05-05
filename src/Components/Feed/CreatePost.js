import React from "react";
import "./feed.css";
import User from "../../image/user.svg";
import PostLike from "../../image/postLike.svg";
import Like from "../../image/like.svg";
import Comment from "../../image/comment.svg";
import Share from "../../image/share.svg";

export const CreatePost = ({ likes, message }) => {

    return (
        <div className="post">
            <div className="post-header">
                <div className="user">
                    <img src={User} alt="User" className="user-avatar" />
                    <div className="post-info">
                        <a href="#" className="post-author">
                            Stanislav Kachalko
                        </a>
                        <div className="post-info-time">
                            <span className="post-time">3 hrs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <div className="post-text">
                    {message}
                </div>
            </div>
            <div className="likes">
                <img src={PostLike} alt="PostLike"/>
                <span className="likes-counter">{likes}</span>
            </div>
            <div className="post-footer">
                <button className="post-btn">
                    <img src={Like} alt="Like"/>
                    <span className="button-text">
                      Like
                    </span>
                </button>
                <button className="post-btn">
                    <img src={Comment} alt="comment"/>
                    <span className="button-text">
                      Comment
                    </span>
                </button>
                <button className="post-btn">
                    <img src={Share} alt="Share"/>
                    <span className="button-text">
                      Share
                    </span>
                </button>
            </div>
        </div>
    )
}
