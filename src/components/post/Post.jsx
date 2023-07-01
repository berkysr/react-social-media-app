import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from "../../dummyData";
import { useState } from 'react';

export default function Post({ post }) {
    const { comment, date, desc, like, photo, userId } = post;
    const { profilePicture, userName } = Users.filter(user => user.id === userId)[0];
    const [addedLike, setLike] = useState(like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? addedLike - 1 : addedLike + 1);
        setIsLiked(!isLiked);
    };

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={ profilePicture }
                    className='postProfileImg'
                    alt="" 
                    />
                    <span className="postUserName">{ userName }</span>
                    <span className="postDate">{ date }</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{ desc }</span>
                <img 
                src={ photo }
                className='postImg'
                alt="" 
                />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" onClick={ likeHandler } alt="" />
                    <img className='likeIcon' src="/assets/heart.png" onClick={ likeHandler } alt="" />
                    <span className="postLikeCounter">{ addedLike } <u>people</u> like this!</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{ comment } Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
